number = 123

def DigitsSum(number):
    sum = 0
    
    for i in str(number): #a sum counting
        sum = sum + int(i)
        
    return sum

sum = DigitsSum(number)

print(f"A digits sum of a number {number}: {sum}")
