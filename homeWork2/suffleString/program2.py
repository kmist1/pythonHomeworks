# Suffle String program
# By Krunal Mistry
# 9/7/20


def restoreString(s, indices):
    s1 = list(s)
    
    for i in range(0,len(s)):
    	s1[indices[i]] = s[i]
    return "".join(s1)

res = restoreString("codeleet",[4,5,6,7,0,2,1,3] )
print(res)