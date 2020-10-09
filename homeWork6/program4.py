import os,fnmatch

def file_finder(startPath, fileName):
    for dirpath, dirs, files in os.walk(startPath):
        for file in files:
            if (file == fileName):
                return os.path.join(dirpath,file)

start_dir = input("Please Enter Start Directory or path: ")
fileName = input("Please Enter name of file to search: ")
print("Path of your file is: ",file_finder(start_dir,fileName))




