class Animal:
    def __init__(self, name):
        self.name = name
        self.hint = []


    def guess_who_am_i(self):
        # initialize hintCount with 0 and max is 3
        hintCount = 0
        # ask user for animal giving hint until it reach 3
        print("I will give you 3 hints, guess what animal I am\n")
        while hintCount < 3:
            #give user hint and ask for animal name
            print(self.hint[hintCount])
            ans = input("Who am I?")

            #if user's ans is match with the animal name, user passed the game. else continue giving hints until it reaches limit(3)
            if (ans == self.name):
                print("You got it! I am {}\n".format(self.name))
                return
            else:
                hintCount+=1
                print("Nope, Try again!!\n")

        print("I'm out of hints! The answer is: {}".format(self.name))

e = Animal("elephant")
e.hint.append("I have exceptional memory")
e.hint.append("I am the largest land-living mammal in the world")
e.hint.append("I have long tusk in world")

t = Animal("tiger")
t.hint.append("I am the biggest cat")
t.hint.append("I come in black and white or orange and black")
t.hint.append("I love to swim and play in water")

b = Animal("bat")
b.hint.append("I use echo-location")
b.hint.append("I can fly")
b.hint.append("I see well in dark")


e.guess_who_am_i()
t.guess_who_am_i()
b.guess_who_am_i()


