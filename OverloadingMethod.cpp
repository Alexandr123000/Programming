#include <iostream>
using namespace std;

class MethodOverloading
{
    public:
    void print_text() 
    {
        cout << "This method has no parameters and no return value." << endl;
    }
    void print_text(int number) // overloading the method
    {
        cout << "This method has 1 parameter (" << number 
        << ") and no return value." << endl;
    }
    int print_text(int first_number, int second_number) // overloading the method
    {
        int sum = first_number + second_number;
        cout << "This method has 2 parameters (" << first_number << ", " 
        << second_number << ") and a return value (" << sum << ")."<< endl;
        return sum;
    }
};

int main()
{
    MethodOverloading method_overloading;
    int number;
    
    method_overloading.print_text();
    
    method_overloading.print_text(10);
    
    number = method_overloading.print_text(10, 20);
    
    return 0;
}
