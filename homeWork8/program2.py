from random import randrange

if __name__ == '__main__':
    print("INTEGER DIVISION")
    try:
        while True:
            a = randrange(5)
            b = randrange(5)
            ans = a//b
            userAns = input("{}/{} = ".format(a,b))
            print(ans,int(userAns))
            if ans == int(userAns):
                print("correct!!")
            else:
                print("incorrect!!")
    except ValueError:
        print("Please Enter integer only")
    except ZeroDivisionError:
        pass
    except Exception as e:
        print("Error: {}".format(e))


