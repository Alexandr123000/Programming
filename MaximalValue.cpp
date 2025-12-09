#include <iostream>
using namespace std;

int main()
{
    int array_size = 10;
    int* array = new int[10] {120, 50, 30, 60, 200, 40, 80, 400, 10, 1000};
    int maximal_value = array[0];
    int maximal_value_index = 0;
    
    for (int i = 1; i < array_size; i++) //searching for a maximal value
    {
        if (array[i] > maximal_value)
        {
            maximal_value = array[i];
            maximal_value_index = i;
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
    
    cout << "A maximal value of the array: " << maximal_value << endl;
    cout << "An index of the maximal value: " << maximal_value_index << endl;
    
    delete[] array;
    
    return 0;
}
