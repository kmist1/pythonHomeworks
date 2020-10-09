import os,fnmatch

start_dir = "v1"

def file_finder(startPath, fileName):
    for dirpath, dirs, files in os.walk(startPath):
        for file in files:
            if (file == fileName):
                return os.path.join(dirpath,file)

print(file_finder(start_dir,'index.html'))




