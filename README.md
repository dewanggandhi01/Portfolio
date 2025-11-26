# Dewang Gandhi - Professional Portfolio

A modern, responsive portfolio website showcasing skills in Data Science, AI Engineering, and Full-Stack Development.

## 🚀 Features

### ✨ Advanced Animations & Effects
- **Particle.js Background** - Interactive particle system
- **Typing Animation** - Dynamic role typing in hero section
- **Smooth Scrolling** - Enhanced navigation experience
- **AOS Animations** - Scroll-triggered animations
- **Hover Effects** - Interactive elements with smooth transitions
- **Floating Elements** - Animated skill icons around profile

### 🎨 Modern Design
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Gradient Effects** - Beautiful gradient text and backgrounds
- **Glass Morphism** - Modern frosted glass effects
- **Professional Color Scheme** - Carefully chosen color palette
- **Custom CSS Variables** - Easy theme customization

### 📱 Interactive Components
- **Mobile-First Navigation** - Collapsible menu for mobile devices
- **Project Filter System** - Filter projects by category
- **Modal Windows** - Detailed project information
- **Contact Form** - Functional form with validation
- **Skill Progress Bars** - Animated skill level indicators
- **Statistics Counter** - Animated number counters

### 🛠 Technical Features
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance Optimized** - Lazy loading and efficient animations
- **Accessibility** - ARIA labels and keyboard navigation
- **Cross-Browser Compatible** - Works on all modern browsers
- **Progressive Enhancement** - Works even with JavaScript disabled

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All CSS styles and animations
├── js/
│   ├── main.js         # Main JavaScript functionality
│   └── projects.js     # Project data and configuration
└── assets/             # Images and other assets
```

## 🎯 Sections

1. **Hero Section** - Introduction with typing animation
2. **About** - Personal journey and statistics
3. **Education** - Academic background with timeline
4. **Experience** - NCC leadership experience
5. **Projects** - Interactive project showcase with filtering
6. **Skills** - Technical skills with animated progress bars
7. **Achievements** - Certifications and accomplishments
8. **Contact** - Contact form and social links

## 🔧 Customization Guide

### Adding New Projects

Edit `js/projects.js` and add your project to the `projectsData` array:

```javascript
{
  id: 10, // Unique ID
  title: "Your Project Title",
  category: "ai", // ai, web, data, automation
  tech: "Technologies Used",
  description: "Short description",
  longDescription: "Detailed HTML description",
  tags: ["Tag1", "Tag2"],
  links: {
    github: "https://github.com/your-repo",
    demo: "https://your-demo-url.com"
  },
  year: "2025"
}
```

### Updating Personal Information

1. **Contact Information**: Update in the HTML file
2. **Social Links**: Update href attributes in navigation and footer
3. **Resume/CV**: Add your resume link to the hero buttons
4. **Profile Image**: Replace the placeholder in the hero section

### Customizing Colors

Modify CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #6366f1;    /* Main brand color */
  --secondary-color: #ec4899;  /* Accent color */
  --accent-color: #10b981;     /* Success color */
  /* ... other colors */
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding CSS in `style.css`
3. Update navigation links
4. Add scroll detection in `main.js`

## 🚀 Getting Started

1. **Clone or Download** this portfolio
2. **Customize** the content with your information
3. **Add your projects** to the projects.js file
4. **Upload** to your hosting platform
5. **Update** social links and contact information

## 📦 Dependencies

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Particles.js](https://vincentgarreau.com/particles.js/) - Background effects

## 🌐 Hosting Recommendations

- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Easy deployment with form handling
- **Vercel** - Fast deployment with edge functions
- **Firebase Hosting** - Google's hosting platform

## 📧 Contact Integration

### Email Integration Options

1. **Formspree** - Simple form backend
2. **Netlify Forms** - Built-in form handling
3. **EmailJS** - Client-side email service
4. **Custom Backend** - PHP, Node.js, or Python backend

### Example EmailJS Integration

```javascript
// Add to contact form handler
emailjs.send('service_id', 'template_id', formData)
  .then(() => {
    showNotification('Message sent successfully!', 'success');
  })
  .catch(() => {
    showNotification('Failed to send message.', 'error');
  });
```

## 🔒 Security Considerations

- **Form Validation** - Client and server-side validation
- **Spam Protection** - Add reCAPTCHA or similar
- **Content Security Policy** - Implement CSP headers
- **HTTPS** - Always use secure connections

## 📈 Analytics Integration

Add Google Analytics or similar:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🎨 Theme Customization

### Creating New Themes

1. Add new color variables for your theme
2. Create theme-specific CSS classes
3. Update the theme toggle functionality
4. Add theme persistence

### Custom Animations

Add custom animations in CSS:

```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.your-element {
  animation: yourAnimation 1s ease-in-out;
}
```

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly interface
- Optimized images and animations
- Fast loading times

## 🚀 Performance Tips

1. **Optimize Images** - Use WebP format when possible
2. **Minimize CSS/JS** - Compress files for production
3. **Lazy Loading** - Load content as needed
4. **CDN Usage** - Use CDNs for external libraries

## 🤝 Contributing

Feel free to fork this project and make it your own! If you create improvements, consider sharing them back with the community.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration** - Modern portfolio trends
- **Libraries** - All the amazing open-source libraries used
- **Community** - Thanks to the web development community

---

**Made with ❤️ by Dewang Gandhi**

📧 dewanggandhi2@gmail.com | 🔗 [LinkedIn](https://linkedin.com/in/dewang-gandhi-21323b331) | 💻 [GitHub](https://github.com/dewanggandhi01)