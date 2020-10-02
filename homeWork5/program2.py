# Counting number of bunny ears using recursion
# By Krunal Mistry
# Created on 9/30/2020

def bunnyEars(bunnies):
    if (bunnies == 0 ): return 0

    if (bunnies % 2 == 0):
        # base condition
        if (bunnies == 1):
            return 3
        return bunnyEars(bunnies-1) + 3
    else:
        # base condition
        if (bunnies == 1):
            return 2
        return bunnyEars(bunnies-1) + 2


print(bunnyEars(0))