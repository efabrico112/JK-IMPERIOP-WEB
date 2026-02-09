
import os

file_path = r'c:\Users\ASUS\PAGINA WED IMPERIO SHOp KJ\index.html'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if 'class="social-links"' in line:
        start_idx = i
        # look for end of div
        for j in range(i, len(lines)):
            if '</div>' in lines[j]:
                end_idx = j
                break
        break

if start_idx != -1 and end_idx != -1:
    print(f"Found block from line {start_idx} to {end_idx}")
    
    # Construct new lines with same indentation as start
    indent = lines[start_idx][:lines[start_idx].find('<')]
    
    new_block = [
        indent + '<div class="social-links" style="margin-top: 10px;">\n',
        indent + '    <a href="https://www.instagram.com/jk_imperip/" target="_blank" style="margin-right: 10px; text-decoration: none;" aria-label="Instagram">\n',
        indent + '        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style="width: 24px; height: 24px; vertical-align: middle;">\n',
        indent + '    </a>\n',
        indent + '</div>\n'
    ]
    
    # Replace lines
    lines[start_idx:end_idx+1] = new_block
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Successfully updated index.html")
else:
    print("Could not find social-links block")
