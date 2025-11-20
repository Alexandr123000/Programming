class Circle:
    PI = 3.141 # a const value
    length = 0 
    square = 0
    radius = 0
    def __init__(self, radius):
        self.radius = radius
    def calculate_square(self): # calculating square
        self.square = self.PI * (self.radius ** 2)
    def calculate_length(self): # calculating length
        self.length = self.PI * (self.radius * 2)
    def get_length(self):
        return self.length
    def get_square(self):
        return self.square
print("Enter a radius of a circle: ")
radius = float(input()) # an input
a_circle = Circle(radius) # making a new object
a_circle.calculate_square()
a_circle.calculate_length()
print("A length of a circle: ")
print(a_circle.get_length()) # showing a length
print("A square of a circle: ")
print(a_circle.get_square()) # showing a square
