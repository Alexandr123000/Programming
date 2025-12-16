#include <iostream>
using namespace std;

int factorial_of_number(int number)
{
    int factorial = 1;
    
    for (int i = 1; i <= number; ++i) //counting a factorial of a number
    {
        factorial *= i;
    }
    
    return factorial;
}

int main()
{
    int factorial, number = 4;
    
    factorial = factorial_of_number(number);
    
    cout << "A factorial of " << number << ": " << factorial << endl;
    
    return 0;
}
