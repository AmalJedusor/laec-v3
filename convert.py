import glob
import os

for file in glob.glob('programme/*/*.rst'):
    cmd = f'pandoc {file} -o {file.replace(".rst", ".md")}'
    print(cmd)
    os.system(cmd)