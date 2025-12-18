#include <iostream>
using namespace std;

int BinaryToDecimal(string binary_number)
{
    int decimal_number = 0, power_of_two = 1, length = binary_number.length();
    
    for (int i = length - 1; i >= 0; i--) //binary to decimal converting
    {
        if (binary_number[i] == '1')
        {
            decimal_number += power_of_two;
        }
        
        power_of_two *= 2;
    }
    
    return decimal_number;
}

int main()
{
    string binary_number = "11111111";
    int decimal_number;
    
    decimal_number = BinaryToDecimal(binary_number);
    
    cout << "A decimal number of " + binary_number + ": " << decimal_number << endl;
    
    return 0;
}
