# count word frequency
# By Krunal Mistry
# 9/23/2020

def count_frequency(myList):
    print(myList)

    wordsDictionary = {}
    for word in myList:
        if (word in wordsDictionary): wordsDictionary[word] += 1
        else: wordsDictionary[word] = 1
    return wordsDictionary

myList = ["one", "two","eleven",  "one", "three", "two", "eleven", "three", "seven", "eleven"]
result = count_frequency(myList)
print(result)