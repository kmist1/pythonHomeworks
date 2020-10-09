#By Krunal Mistry

import json,pprint,os,shutil

PARENT_DIR = "quotes_output"
fileName = "quote"
counter = 1
with open('quotes.json','r') as quotesFile:
    data = json.load(quotesFile)



if (os.path.exists(PARENT_DIR)):
    shutil.rmtree(PARENT_DIR)

os.mkdir(PARENT_DIR)
os.chdir(PARENT_DIR)

for node in data:
    corrected_Author = node["author"] if node["author"] is not None else "Unknown"
    dir_name = (corrected_Author.replace(" ","_"))
    if not os.path.exists(dir_name):
        os.mkdir(dir_name)
        os.chdir(dir_name)
        out = open("{}1.txt".format(fileName), 'w')
        out.write(node['text'])
        out.close()
        os.chdir('..')
    else:
        print("{} already exists".format(dir_name))
        os.chdir(dir_name)
        for i in range(1,10):
            if(not os.path.exists("{}{}.txt".format(fileName,i))):
                out1 = open("{}{}.txt".format(fileName, i), 'w')
                out1.write(node['text'])
                out1.close()
                break
            else: continue
        os.chdir('..')



