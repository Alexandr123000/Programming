#include <iostream>
using namespace std;

class Number
{
    public:
    static string decimal_to_hexadecimal(int decimal_number)
    {
        const string HEXADECIMAL_CHARS = "0123456789ABCDEF";
        string hexadecimal_number;
        
        while (decimal_number > 0) //Converting the number
        {
            hexadecimal_number = HEXADECIMAL_CHARS[decimal_number % 16] + hexadecimal_number;
            decimal_number /= 16;
        }
        
        return hexadecimal_number.empty() ? "0" : hexadecimal_number;
    }
};

int main()
{
    int decimal_number = 123;
    string hexadecimal_number = Number::decimal_to_hexadecimal(decimal_number);
    
    cout << "A decimal number: " << decimal_number << endl;
    cout << "A hexadecimal number: " << hexadecimal_number << endl;
    
    return 0;
}
