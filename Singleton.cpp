#include <iostream>
using namespace std;

class Singleton
{
    private:
       string some_data; // an object's data
       static Singleton* singleton_ptr;
       Singleton() = default;
    public:
       static Singleton* get_instance() // getting an object
       {
           if (singleton_ptr == nullptr)
           {
               singleton_ptr = new Singleton();
           }
           return singleton_ptr;
       }
       Singleton(const Singleton&) = delete; //copying contructor
       ~Singleton() // deleting an object
       {
           singleton_ptr = nullptr;
       }
       void set_some_data(string data) //setting some_data
       {
           some_data = data;
       }
       string get_some_data() //getting some_data
       {
           return some_data;
       }
};

Singleton* Singleton::singleton_ptr = nullptr;

int main()
{
    Singleton* pointer = Singleton::get_instance();
    pointer->set_some_data("Some text");
    cout << pointer->get_some_data() << endl;
    delete pointer;
    return 0;
}
