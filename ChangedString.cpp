#include <iostream>
using namespace std;

string Replace(string start_string)
{
    string changed_string;
    
    for (int i = 0; i < start_string.length(); i++) //replacing
    {
        if (start_string[i] == ' ')
        {
            start_string[i] = '_';
        }
    }
    
    changed_string = start_string;
    
    return changed_string;
}

int main()
{
    string start_string = "This is a text string.", changed_string;
    
    changed_string = Replace(start_string);
    
    cout << "A start string: " << start_string << endl;
    cout << "A changed string: " << changed_string << endl;
    
    return 0;
}
