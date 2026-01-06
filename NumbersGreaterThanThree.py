numbers_array = [2, 10, 5, 150, 7, 4, 1, 45, 14, 8]
number = 3

def get_numbers(number, numbers_array):
    for i in numbers_array: # finding numbers
        if i > number:
            yield i

print(f"An array: {numbers_array}")
print(f"Numbers greater than {number}: ", end = " ")

for i in get_numbers(number, numbers_array):
    print (i, end = " ")
