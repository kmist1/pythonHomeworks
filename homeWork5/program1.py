# custom range method using genrator function
# By Krunal Mistry
# Created on 9/30/2020

def my_range(*params):
    x = params[0]
    end = params[1]

    if (len(params) <= 2):
        while (x < end):
            yield x
            x = x+1
    elif (len(params) == 3):
        steps = params[2]
        while (x < end):
            yield x
            x = x + steps


for i in my_range(0,5,2):
    print(i)