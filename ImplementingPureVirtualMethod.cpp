#include <iostream>
using namespace std;

class AbstractClass
{
    public:
    virtual void print_text() = 0;
};

class DerivedClass: public AbstractClass
{
    void print_text() // implementing the method
    {
        cout << "A pure virtual method is implemented.";
    }
};

int main()
{
    AbstractClass *object = new DerivedClass;
    
    object->print_text();
    
    return 0;
}
