def number_cubbing(number):
    try:                     #trying to count
        result = number ** 3
        print(f"A result: {result}")
    except:
        print("The value is not a number.")

number_cubbing(3)
