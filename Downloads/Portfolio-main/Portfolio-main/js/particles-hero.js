// Interactive Particles for Hero Section
// Simplex noise function
const SimplexNoise = function() {
    const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    
    const grad3 = new Float32Array([1,1,0, -1,1,0, 1,-1,0, -1,-1,0,
                                   1,0,1, -1,0,1, 1,0,-1, -1,0,-1,
                                   0,1,1, 0,-1,1, 0,1,-1, 0,-1,-1]);
    
    const p = new Uint8Array([151,160,137,91,90,15,
        131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
        190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
        88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
        77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
        102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
        135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
        5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
        223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
        129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
        251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
        49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
        138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180]);
    
    const perm = new Uint8Array(512);
    const permMod12 = new Uint8Array(512);
    for(let i=0; i<512; i++) {
        perm[i]=p[i & 255];
        permMod12[i] = perm[i] % 12;
    }
    
    this.noise2D = function(xin, yin) {
        const s = (xin+yin)*F2;
        const i = Math.floor(xin+s);
        const j = Math.floor(yin+s);
        const t = (i+j)*G2;
        const X0 = i-t;
        const Y0 = j-t;
        const x0 = xin-X0;
        const y0 = yin-Y0;
        const i1 = x0>y0 ? 1 : 0;
        const j1 = x0>y0 ? 0 : 1;
        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1.0 + 2.0 * G2;
        const y2 = y0 - 1.0 + 2.0 * G2;
        const ii = i & 255;
        const jj = j & 255;
        let t0 = 0.5 - x0*x0-y0*y0;
        let n0, n1, n2;
        if(t0<0) n0 = 0.0;
        else {
            const gi0 = permMod12[ii+perm[jj]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0+1] * y0);
        }
        let t1 = 0.5 - x1*x1-y1*y1;
        if(t1<0) n1 = 0.0;
        else {
            const gi1 = permMod12[ii+i1+perm[jj+j1]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1+1] * y1);
        }
        let t2 = 0.5 - x2*x2-y2*y2;
        if(t2<0) n2 = 0.0;
        else {
            const gi2 = permMod12[ii+1+perm[jj+1]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2+1] * y2);
        }
        return 70.0 * (n0 + n1 + n2);
    };
};

const simplex = new SimplexNoise();

// Touch Texture Class
class TouchTexture {
    constructor() {
        this.size = 64;
        this.maxAge = 120;
        this.radius = 0.15;
        this.trail = [];
        
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.canvas.height = this.size;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.size, this.size);
        
        this.texture = new THREE.Texture(this.canvas);
        this.texture.minFilter = THREE.LinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
    }
    
    update() {
        this.clear();
        this.trail.forEach((point, i) => {
            point.age++;
            if (point.age > this.maxAge) {
                this.trail.splice(i, 1);
            }
        });
        this.trail.forEach(point => this.drawTouch(point));
        this.texture.needsUpdate = true;
    }
    
    clear() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.size, this.size);
    }
    
    addTouch(point) {
        let force = 0;
        const last = this.trail[this.trail.length - 1];
        if (last) {
            const dx = last.x - point.x;
            const dy = last.y - point.y;
            const dd = dx * dx + dy * dy;
            force = Math.min(dd * 10000, 1);
        }
        this.trail.push({ x: point.x, y: point.y, age: 0, force });
    }
    
    drawTouch(point) {
        const pos = {
            x: point.x * this.size,
            y: (1 - point.y) * this.size
        };
        
        let intensity = 1;
        if (point.age < this.maxAge * 0.3) {
            intensity = this.easeOutSine(point.age / (this.maxAge * 0.3));
        } else {
            intensity = this.easeOutSine(1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7));
        }
        
        intensity *= point.force;
        const radius = this.size * this.radius * intensity;
        const grd = this.ctx.createRadialGradient(pos.x, pos.y, radius * 0.25, pos.x, pos.y, radius);
        grd.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
        grd.addColorStop(1, 'rgba(0, 0, 0, 0.0)');
        
        this.ctx.beginPath();
        this.ctx.fillStyle = grd;
        this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    easeOutSine(t) {
        return Math.sin(t * Math.PI / 2);
    }
}

// Main App
let scene, camera, renderer, particles, touchTexture;
let raycaster, mouse, hitArea;
let clock;
let fovHeight;

function initParticlesHero() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) {
        console.error('Particle canvas not found');
        return;
    }

    console.log('Initializing interactive particles...');

    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 300;
    
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    clock = new THREE.Clock();
    
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    touchTexture = new TouchTexture();
    
    loadImage('heropage/interactive-particles-master/static/images/image2.png');
    
    window.addEventListener('resize', onResizeParticles);
    // Also listen on document for better coverage
    document.addEventListener('mousemove', onMouseMoveParticles);
    canvas.addEventListener('mousemove', onMouseMoveParticles);
    canvas.addEventListener('touchmove', onTouchMoveParticles, { passive: true });
    
    animateParticles();
}

function loadImage(src) {
    const loader = new THREE.TextureLoader();
    loader.load(
        src,
        (texture) => {
            console.log('Image loaded successfully');
            createParticles(texture);
        },
        undefined,
        (error) => {
            console.error('Error loading image:', error);
        }
    );
}

function createParticles(texture) {
    if (particles) {
        scene.remove(particles);
    }
    
    const width = texture.image.width;
    const height = texture.image.height;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.scale(1, -1);
    ctx.drawImage(texture.image, 0, 0, width, height * -1);
    
    const imgData = ctx.getImageData(0, 0, width, height);
    const originalColors = Float32Array.from(imgData.data);
    
    const threshold = 80;
    let numVisible = 0;
    for (let i = 0; i < width * height; i++) {
        const x = i % width;
        const y = Math.floor(i / width);
        if (x % 2 !== 0 || y % 2 !== 0) continue;
        if (originalColors[i * 4] > threshold) numVisible++;
    }
    
    const uniforms = {
        uTime: { value: 0 },
        uRandom: { value: 1.0 },
        uDepth: { value: 2.0 },
        uSize: { value: 0.0 },
        uTextureSize: { value: new THREE.Vector2(width, height) },
        uTexture: { value: texture },
        uTouch: { value: touchTexture.texture },
    };
    
    const material = new THREE.RawShaderMaterial({
        uniforms,
        vertexShader: `
            precision highp float;
            attribute float pindex;
            attribute vec3 position;
            attribute vec3 offset;
            attribute vec2 uv;
            attribute float angle;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            uniform float uTime;
            uniform float uRandom;
            uniform float uDepth;
            uniform float uSize;
            uniform vec2 uTextureSize;
            uniform sampler2D uTexture;
            uniform sampler2D uTouch;
            varying vec2 vPUv;
            varying vec2 vUv;
            
            float random(float n) {
                return fract(sin(n) * 43758.5453123);
            }
            
            void main() {
                vUv = uv;
                vec2 puv = offset.xy / uTextureSize;
                vPUv = puv;
                vec4 colA = texture2D(uTexture, puv);
                float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;
                vec3 displaced = offset;
                displaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;
                float rndz = random(pindex);
                displaced.z += rndz * (random(pindex) * 2.0 * uDepth);
                displaced.xy -= uTextureSize * 0.5;
                float t = texture2D(uTouch, puv).r;
                displaced.z += t * 35.0 * rndz;
                displaced.x += cos(angle) * t * 35.0 * rndz;
                displaced.y += sin(angle) * t * 35.0 * rndz;
                float psize = 1.0;
                psize *= max(grey, 0.2);
                psize *= uSize;
                vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
                mvPosition.xyz += position * psize;
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            precision highp float;
            uniform sampler2D uTexture;
            varying vec2 vPUv;
            varying vec2 vUv;
            
            void main() {
                vec4 color = vec4(0.0);
                vec2 uv = vUv;
                vec2 puv = vPUv;
                vec4 colA = texture2D(uTexture, puv);
                float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;
                vec4 colB = vec4(grey, grey, grey, 1.0);
                float border = 0.3;
                float radius = 0.5;
                float dist = radius - distance(uv, vec2(0.5));
                float t = smoothstep(0.0, border, dist);
                color = colB;
                color.a = t;
                gl_FragColor = color;
            }
        `,
        depthTest: false,
        transparent: true,
    });
    
    const geometry = new THREE.InstancedBufferGeometry();
    const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
    positions.setXYZ(0, -0.5, 0.5, 0.0);
    positions.setXYZ(1, 0.5, 0.5, 0.0);
    positions.setXYZ(2, -0.5, -0.5, 0.0);
    positions.setXYZ(3, 0.5, -0.5, 0.0);
    geometry.addAttribute('position', positions);
    
    const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
    uvs.setXYZ(0, 0.0, 0.0);
    uvs.setXYZ(1, 1.0, 0.0);
    uvs.setXYZ(2, 0.0, 1.0);
    uvs.setXYZ(3, 1.0, 1.0);
    geometry.addAttribute('uv', uvs);
    
    geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1));
    
    const indices = new Uint16Array(numVisible);
    const offsets = new Float32Array(numVisible * 3);
    const angles = new Float32Array(numVisible);
    
    for (let i = 0, j = 0; i < width * height; i++) {
        const x = i % width;
        const y = Math.floor(i / width);
        if (x % 2 !== 0 || y % 2 !== 0) continue;
        if (originalColors[i * 4] <= threshold) continue;
        offsets[j * 3 + 0] = x;
        offsets[j * 3 + 1] = y;
        indices[j] = i;
        angles[j] = Math.random() * Math.PI;
        j++;
    }
    
    geometry.addAttribute('pindex', new THREE.InstancedBufferAttribute(indices, 1, false));
    geometry.addAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 3, false));
    geometry.addAttribute('angle', new THREE.InstancedBufferAttribute(angles, 1, false));
    
    particles = new THREE.Mesh(geometry, material);
    scene.add(particles);
    
    const hitGeo = new THREE.PlaneGeometry(width, height, 1, 1);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    hitArea = new THREE.Mesh(hitGeo, hitMat);
    scene.add(hitArea);
    
    TweenMax.fromTo(particles.material.uniforms.uSize, 1, { value: 1.0 }, { value: 3.5 });
    TweenMax.to(particles.material.uniforms.uRandom, 1, { value: 2.0 });
    TweenMax.fromTo(particles.material.uniforms.uDepth, 1.5, { value: 40.0 }, { value: 4.0 });
    
    onResizeParticles();
}

function onMouseMoveParticles(event) {
    if (!hitArea || !camera) return;
    
    // Use window dimensions for consistent calculation
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(hitArea);
    
    if (intersects.length > 0) {
        const uv = intersects[0].uv;
        touchTexture.addTouch(uv);
    }
}

function onTouchMoveParticles(event) {
    if (!hitArea || !camera) return;
    
    const touch = event.touches[0];
    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(hitArea);
    
    if (intersects.length > 0) {
        const uv = intersects[0].uv;
        touchTexture.addTouch(uv);
    }
}

function onResizeParticles() {
    if (!camera || !renderer) return;
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    fovHeight = 2 * Math.tan((camera.fov * Math.PI / 180) / 2) * camera.position.z;
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (particles && hitArea) {
        const width = particles.material.uniforms.uTextureSize.value.x;
        const height = particles.material.uniforms.uTextureSize.value.y;
        const scale = fovHeight / height;
        particles.scale.set(scale, scale, 1);
        hitArea.scale.set(scale, scale, 1);
    }
}

function animateParticles() {
    requestAnimationFrame(animateParticles);
    
    const delta = clock.getDelta();
    
    if (particles) {
        particles.material.uniforms.uTime.value += delta;
    }
    
    touchTexture.update();
    
    renderer.render(scene, camera);
}

// Initialize when DOM is ready
function startParticlesHero() {
    // Wait a bit for other scripts to load
    setTimeout(() => {
        if (typeof THREE !== 'undefined' && typeof TweenMax !== 'undefined') {
            initParticlesHero();
        } else {
            console.error('Three.js or GSAP not loaded');
        }
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startParticlesHero);
} else {
    startParticlesHero();
}
