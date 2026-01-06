#include <iostream>
using namespace std;

class Number
{
    private:
    int number = 10;
    
    public:
    int GetNumber()
    {
        return this->number;
    }
    
    friend void ChangeNumber(Number& number_object);
};

void ChangeNumber(Number& number_object)
{
    number_object.number = 20; // changing the number
}

int main()
{
    Number number_object;
    
    cout << "A number equals " << number_object.GetNumber() << "." << endl;
    
    ChangeNumber(number_object);
    
    cout << "The changed number equals " << number_object.GetNumber() << "." << endl;
    
    return 0;
}
