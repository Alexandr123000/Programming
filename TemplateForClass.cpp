#include <iostream>
using namespace std;

template <class T>
class DataClass
{
    public:
    T data;
};

int main()
{
    DataClass<int> data_object;
    
    data_object.data = 10; //data for the object
    
    cout << "Data of object: " << data_object.data << "." << endl;
    
    return 0;
}
