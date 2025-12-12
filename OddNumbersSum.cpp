#include <iostream>
using namespace std;

int main()
{
    int first_value = 10; // a first value of a range
    int second_value = 30; // a second value of a range
    int sum = 0; // a sum of odd numbers
    
    while (first_value <= second_value) //counting a sum of odd numbers
    {
        if (first_value % 2 != 0)
        {
            sum += first_value;
        }
        first_value++;
    }
    
    cout << "A sum of odd numbers: " << sum << endl;
    
    return 0;
}
