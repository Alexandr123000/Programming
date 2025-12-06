class Number:
    @staticmethod
    def reveresed_number(number):
        string_number = str(number)
        digit_amount = len(string_number)
        reveresed_number = ''
        while digit_amount > 0: #reversing the number
            if digit_amount - 1 == 0:
               reveresed_number += string_number[digit_amount - 1]
               break
            reveresed_number += string_number[digit_amount - 1]
            digit_amount -= 1
        return int(reveresed_number)
       
initial_number = 123456789
reveresed_number = Number.reveresed_number(initial_number)

print("An initial number: " + str(initial_number))
print("A reversed number: " + str(reveresed_number))
