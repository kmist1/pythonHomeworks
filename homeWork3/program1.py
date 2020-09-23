# Converting temprature from fahrenheit to celcius
# By Krunal Mistry
# 9/23/2020

def fahTocel(Tf):
    return int(((5/9)*(Tf-32)))

Tf = input("Please Enter Temprature in Fahrenheit: ");
Tc = fahTocel(int(Tf))
print("Temprature in Celcius is: " + str(Tc))