#include <iostream>
using namespace std;

class BaseClass
{
    public:
    int first_value, second_value;
    
    BaseClass(int first_value, int second_value) //constructor
    {
        this->first_value = first_value;
        this->second_value = second_value;
    }
    BaseClass() //default constructor
    {
        this->first_value = 10;
        this->second_value = 20;
    }
    ~BaseClass() //destructor
    {
        cout << "The object is deleted." << endl;
    }
    virtual void class_name() //virtual method
    {
        cout << "This is a base class object." << endl;
    }
};

class DerivedClass : public BaseClass
{
    void class_name() //class_name overriding
    {
        cout << "This is a derived class object." << endl;
    }
};

int main()
{
    BaseClass base_class;
    DerivedClass derived_class;
    BaseClass *pointer = &base_class;
    
    pointer->class_name();
    
    pointer = &derived_class;
    
    pointer->class_name();
    
    return 0;
}
