def decorator(function):
    def wrapper():
        print("Result of a function:")
        function()
    return wrapper

@decorator #wrapping the function
def function():
    print("This is a function.")
    
function()
