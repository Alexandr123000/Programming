def insertion_sort(nums):
    for i1 in range(1, len(nums)): #sorting a list
        temp_value = nums[i1]
        i2 = i1 - 1
        while i2 >= 0 and nums[i2] > temp_value:
            nums[i2 + 1] = nums[i2]
            i2 -= 1
        nums[i2 + 1] = temp_value

nums = [2, 1, 46, 98, 23, 4, 159, 8, 41, 87]

print('An unsorted list: ' + str(nums))

insertion_sort(nums)

print('A sorted list: ' + str(nums))
