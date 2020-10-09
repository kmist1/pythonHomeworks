
from TimeInSeconds import timeInSeconds
import shelve

@timeInSeconds
def dictOperation(*args):
    dictionary = {"test": "this is test"}
    dictionary.get("test")

@timeInSeconds
def shOperation(*args):
    sh = shelve.open('myItems')
    sh['test'] = "this is test"
    sh["test"]



print("1st",dictOperation())
print("2nd",shOperation())

# output:
# 1st 1.9073486328125e-06
# 2nd 0.009262800216674805
#
# so, we can conclude that dictonary takes 2times more time to perform operation compare to shelves

