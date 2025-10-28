#include <iostream>
using namespace std;
class Tiles
{
    public:
    string brand;
    int size_h, size_w, price;
    void getData() // showing the data
    {
        cout << "Brand: " << brand <<
        ". Height: " << size_h << ". Width: " 
        << size_w << ". Price: " << price << "." << endl;
    }
};
int main()
{
    Tiles *a_tile, *b_tile;
    //Creating the objects
    a_tile = new Tiles();
    b_tile = new Tiles();
    //Filling the objects' fields
    a_tile->brand = "a_tile";
    a_tile->size_h = 20;
    a_tile->size_w = 15;
    a_tile->price = 1000;
    b_tile->brand = "b_tile";
    b_tile->size_h = 25;
    b_tile->size_w = 20;
    b_tile->price = 1500;
    //Showing the data
    a_tile->getData();
    b_tile->getData();
    return 0;
}
