string = "level"
reversed_string = ""

for i in string: #string reversing
    reversed_string = i + reversed_string
    
if string == reversed_string:
    print(f"The string \"{string}\" is a palindrome.")
else:
    print(f"The string \"{string}\" is not a palindome.")
