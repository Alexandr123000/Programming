matrix = [[2, 5, 4, 3, 8],
          [1, 9, 3, 7, 2],
          [7, 2, 1, 6, 9],
          [8, 6, 2, 5, 4],
          [9, 8, 1, 7, 3]]
transposed_matrix = []

for i in range(len(matrix)): # transposing the matrix
    temp_row = []
    for row in matrix:
        temp_row.append(row[i])
    transposed_matrix.append(temp_row)

print("A matrix")
for row in matrix:
    print(row)
    
print("")
print("A transposed matrix")
for row in transposed_matrix:
    print(row)
