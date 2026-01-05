import math

a = 2
b = 4
c = 12

print("An equation: ax^2 + bx + c = 0")
print(f"a = {a}, b = {b}, c = {c}")

discriminant = b ** 2 - 4 * a * c #discriminant counting

print(f"Discriminant: {discriminant:.2f}")

if discriminant > 0:
    x1 = (-b + math.sqrt(discriminant)) / (2 * a) #x1 root counting
    x2 = (-b - math.sqrt(discriminant)) / (2 * a) #x2 root counting
    print(f"x1 = {x1:.2f}")
    print(f"x2 = {x2:.2f}")
elif discriminant == 0:
    x = -b / (2 * a) #x root counting
    print(f"x = {x:.2f}")
else:
    print("The quadratic equation has no roots.")
