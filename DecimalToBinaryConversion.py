decimal_number = 255
temp_number = decimal_number
binary_format = ''

while temp_number > 0: #converting decimal to binary
    binary_format = str(temp_number % 2) + binary_format
    temp_number = temp_number // 2

print(f"A binary format of the decimal number {decimal_number}: {binary_format}")
