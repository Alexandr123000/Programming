#include <iostream>
using namespace std;

int main()
{
    int array_size = 10;
    int* array = new int[10] {120, 50, 30, 60, 200, 40, 80, 400, 10, 1000};
    int minimal_value = array[0];
    int minimal_value_index = 0;
    
    for (int i = 1; i < array_size; i++) //searching for a minimal value
    {
        if (array[i] < minimal_value)
        {
            minimal_value = array[i];
            minimal_value_index = i;
        }
    }
    
    cout << "An array: ";
    
    for (int i = 0; i < array_size; i++) //showing the array
    {
        if (i + 1 == array_size)
        {
            cout << array[i] << endl;
            break;
        }
        cout << array[i] << ", ";
    }
    
    cout << "A minimal value of the array: " << minimal_value << endl;
    cout << "An index of the minimal value: " << minimal_value_index << endl;
    
    delete[] array;
    
    return 0;
}
