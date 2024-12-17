import os
from bs4 import BeautifulSoup
from unidecode import unidecode
import re

# Folders
input_folder = "folder_name" # HTML input folder
output_folder = "folder_name" # html output folder

# Create Slug function
def create_slug(text):
    text = unidecode(text)  # replace non-latin characters
    text = re.sub(r'\W+', '-', text)  # replace non-alphanumeric characters
    text = text.strip('-').lower()  # clean - and lower
    return text

# Add ID to headings
def add_ids_to_headings(html):
    soup = BeautifulSoup(html, 'html.parser')
    heading_tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    ids_seen = set()

    for tag in soup.find_all(heading_tags):
        if not tag.get('id'):
            slug = create_slug(tag.get_text())
            original_slug = slug
            counter = 1
            while slug in ids_seen:  #create uniq slug
                slug = f"{original_slug}-{counter}"
                counter += 1
            ids_seen.add(slug)
            tag['id'] = slug

    return str(soup)

# All HTML files in folder
if not os.path.exists(output_folder):
    os.makedirs(output_folder)
for filename in os.listdir(input_folder):
    if filename.endswith(".html") or filename.endswith(".htm"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        with open(input_path, 'r', encoding='utf-8') as file:
            html_content = file.read()

        updated_html = add_ids_to_headings(html_content)

        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(updated_html)

        print(f"{filename} added to {output_folder}")

print("All HTML files were ok.")