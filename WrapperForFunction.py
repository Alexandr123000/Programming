def decorator_with_arguments(function):
    def wrapper(*args, **kwargs):
        print(f"The function contains arguments such as: {args}, {kwargs}.")
        return function(*args, **kwargs)
    return wrapper

@decorator_with_arguments #wrapping the function
def function(vehicle, automaker):
    print(f"A vehicle is {vehicle}. An automaker is {automaker}.")
    
function("Bus", automaker="Bestbus")
