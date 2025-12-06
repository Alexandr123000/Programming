#include <iostream>
using namespace std;
int main()
{
    const int array_size = 10;
    int* array = new int[array_size] {20, 10, 3, 6, 55, 100, 1, 4, 9, 82};
    
    cout << "An array: ";
    
    for (int i = 0; i < array_size; i++) //showing an array
    {
        if (i + 1 == array_size)
        {
           cout << array[i] << endl;
           break;
        }
        cout << array[i] << ", ";
    }
    
    int max_value = array[0];
    
    for (int i = 1; i < array_size; i++) //searching a maximal value
    {
       if (max_value < array[i])
       {
           max_value = array[i];
       }
    }
    
    cout << "The max value of the array: " << max_value << endl;
    
    return 0;
}
