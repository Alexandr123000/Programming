some_list = [4, 9, 1, 3, 6, 8, 10, 2, 40, 32]

print('An unsorted list: ' + str(some_list)) #showing an unsorted list

for i in range(len(some_list)): #selection sort
    index = i
    for j in range(i + 1, len(some_list)):
        if some_list[j] < some_list[index]:
            index = j
    some_list[i], some_list[index] = some_list[index], some_list[i]

print('A sorted list: ' + str(some_list)) #showing a sorted list
