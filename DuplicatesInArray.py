array = [5, 2, 8, 5, 7, 4, 200, 7, 1, 10]

print(f"An array: {array}")

for i in range(len(array) - 1): #finding duplicates
    for j in range(i + 1, len(array)):
        if array[i] == array[j]:
            print("The array has duplicate elements.")
            quit()

print("All elements in the array are unique.")
