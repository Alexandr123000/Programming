#include <iostream>
using namespace std;

int main()
{
    int array[20] = {5, 9, 4, 6, 8, 1, 3, 2, 10, 56, 73, 22, 20, 11, 16, 13, 42, 53, 90, 31};
    
    cout << "An unsorted array: ";
    
    for (int i = 0; i < 20; i++) //showing an unsorted array
    {
        if (i + 1 == 20)
        {
            cout << array[i];
            break;
        }
        cout << array[i] << ", ";
    }
    
    cout << endl;
    
    for (int i = 0; i < 20; i++) //bubble sort
    {
        for (int j = 0; j < 19; j++)
        {
            if (array[j] > array[j + 1])
            {
                int temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    
    cout << "A sorted array: ";
    
    for (int i = 0; i < 20; i++) //showing a sorted array
    {
        if (i + 1 == 20)
        {
            cout << array[i];
            break;
        }
        cout << array[i] << ", ";
    }
    
    return 0;
}
