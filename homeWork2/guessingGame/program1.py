
#Guessing the number game
#By Krunal Mistry

def guessingGame(lowerBound,upperBound ):
    numbers = [n for n in range(lowerBound, upperBound + 1)];   #will create the list of numbers
    print("guess any number from this list ||" + str(numbers)); #[1,2,3,4,5,6,7,8,9,10]  myNumber = 3

    notFound = True
    counter = 1
    while(notFound):
        midPoint = int(lowerBound + (upperBound - lowerBound) / 2)  #setting midPoint
        userFeedback = input(("is the number is " + str(midPoint) + "?.(yes/ no)" )) #getting feedback from user that the number is same or no?
        if userFeedback == 'yes':
            print("Yes, I guessed the number in " + str(counter) + " times")
            notFound = False
        else:
            isHigher = input(("is the number is Higher than " + str(midPoint) + "?.(yes/ no)"))
            counter+=1
            if isHigher == 'yes': lowerBound = midPoint + 1
            else: upperBound = midPoint + 1

print("Welcome, In this game select your range of numbers and think of any number from that range. I will guess number as fast as possible")
play = True
while(play):
    first = int(input("what is first number?"))
    last = int(input("what is last number?"))
    guessingGame(first, last)
    play = False
    playAgain = input('Want to play again?.(yes/no)')
    if playAgain == 'yes': play = True
    else: print("See you again!!")
