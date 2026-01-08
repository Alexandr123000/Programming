#include <iostream>
using namespace std;

void FillAndShowArray(int array[], int array_size)
{
    for (int i = 0; i < array_size; i++) // filling an array
    {
        array[i] = i;
    }
    
    cout << "Array elements: ";
    
    for (int i = 0; i < array_size; i++) // showing the array
    {
        cout << array[i] << " ";
    }
    
    cout << endl;
}

int main()
{
    int size_of_first_array = 5, size_of_second_array = 10;
    int first_array[size_of_first_array], second_array[size_of_second_array];
    
    FillAndShowArray(first_array, size_of_first_array);
    FillAndShowArray(second_array, size_of_second_array);
    
    return 0;
}
