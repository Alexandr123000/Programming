import math

AB = 5.3
BC = 7.8
AC = math.sqrt((AB ** 2) + (BC ** 2)) #calculating the length of the hypotenuse
area = (AB * BC) / 2 #calculating the area of the triangle
perimeter = AB + BC + AC #calculating the perimeter of the triangle

print('An area of the triangle: %.1f' % (area))
print('A perimeter of the triangle: %.1f' % (perimeter))
