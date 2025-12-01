from abc import ABC, abstractmethod

class Shape(ABC): #creating an abstract shape
    area = 0
    length = 0
    height = 0
    def __init__(self, l, h):
        self.length = l
        self.height = h
    @abstractmethod
    def area(self):
        pass

class Triangle(Shape): #creating a triangle
    def area(self):
        self.area = (self.length * self.height) / 2

class Rectangle(Shape): #creating a rectangle
    def area(self):
        self.area = self.length * self.height

triangle = Triangle(5, 5)
rectangle = Rectangle(3, 3)

triangle.area() #calculating an area of the triangle
rectangle.area() #calculating an area of the rectangle

print('An area of a triangle: ' + str(triangle.area))
print('An area of a rectangle: ' + str(rectangle.area))
