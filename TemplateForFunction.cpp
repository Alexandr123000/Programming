#include <iostream>
#include <typeinfo>
using namespace std;

template <typename type>
void function(type value)
{
    string inttype = "i", floattype = "f", doubletype = "d", chartype = "c", booltype = "b";
    if (typeid(value).name() == inttype) // finding the type of the value
    {
       cout << "A type of " << value << ": " << "integer." << endl;
    }
    else if (typeid(value).name() == floattype)
    {
        cout << "A type of " << value << ": " << "float." << endl;
    }
    else if (typeid(value).name() == doubletype)
    {
        cout << "A type of " << value << ": " << "double." << endl;
    }
    else if (typeid(value).name() == chartype)
    {
        cout << "A type of " << value << ": " << "char." << endl;
    }
    else if (typeid(value).name() == booltype)
    {
        cout << "A type of " << value << ": " << "bool." << endl;
    }
}

int main()
{
    int number = 10;
    function(number);
    return 0;
}
