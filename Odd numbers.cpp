#include <iostream>
using namespace std;
int main()
{
    const int length = 50, beginning = 1, end = 99;
    int counter = 0;
    int array[length]; // creating an array
    for (int i = beginning; i < end + 1; i++) // filling it by the odd numbers
    {
        if(i % 2 != 0)
        {
            array[counter] = i;
            counter++;
        }
    }
    cout << "Odd numbers: ";
    for (int i = 0; i < length; i++) // showing the odd numbers
    {
        if (i + 1 == length)
        {
           cout << array[i];
           break;
        } 
        cout << array[i] << ", ";
    }
    cout << endl;
    return 0;
}
