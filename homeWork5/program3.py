
# timeCalc decorator to calculate time taken by any function
# By Krunal Mistry
# on 10/2/2020

import time


def timeInSeconds(func):
    def timeCalc(*args):
        start = time.time()
        res = func(args)
        end = time.time()
        return end - start
    return timeCalc

@timeInSeconds
def addTo5 (params):
    for y in params:
        return y + 5

print(addTo5(5))


