with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Look for 'hidden' occurrences
import re
print("--- 'hidden' occurrences ---")
for m in re.finditer(r'\bhidden\b', content):
    start = max(0, m.start() - 100)
    end = min(len(content), m.end() + 100)
    print(content[start:end])
    print("="*40)
