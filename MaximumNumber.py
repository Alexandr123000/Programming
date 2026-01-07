def maximum(first_number, second_number):
    if first_number > second_number: # finding a maximum number
        print(f"Maximum number {first_number}")
    elif second_number > first_number:
        print(f"Maximum number {second_number}")
    else:
        print("The numbers are equal.")
        
maximum(10, 20)
