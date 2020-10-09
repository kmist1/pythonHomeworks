import time


def timeInSeconds(func):
    def timeCalc(*args):
        start = time.time()
        res = func(args)
        end = time.time()
        return end - start
    return timeCalc
