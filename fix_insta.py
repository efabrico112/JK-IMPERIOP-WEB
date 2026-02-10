
import os

file_path = r'c:\Users\ASUS\PAGINA WED IMPERIO SHOp KJ\index.html'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Define the start and end markers for the block we want to replace
start_marker = '<div class="social-links" style="margin-top: 10px;">'
end_marker = '</div>'

# Find start
start_idx = content.find(start_marker)
if start_idx == -1:
    print("Start marker not found")
    exit(1)

# Find end (after start)
end_idx = content.find(end_marker, start_idx)
if end_idx == -1:
    print("End marker not found")
    exit(1)

end_idx += len(end_marker)

# The new content
new_block = '''<div class="social-links" style="margin-top: 10px;">
                    <a href="https://www.instagram.com/jk_imperip/" target="_blank"
                        style="margin-right: 10px; text-decoration: none;"
                        aria-label="Instagram">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style="width: 24px; height: 24px; vertical-align: middle;">
                    </a>
                </div>'''

# Reconstruct file
new_content = content[:start_idx] + new_block + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated index.html")
