# Indefinitely monitoring file existance at certain location
# By Krunal Mistry
# Created on 10/7/2020

import os

isExists = True

def fileDirExists(fileName):
    isExists = os.path.exists(fileName)
    return os.path.exists(fileName)

path = input("Please Enter Name of File, Directory or path: ")

while isExists:
    print(fileDirExists(path))
    isExists = fileDirExists(path)

print("File does not exists")




