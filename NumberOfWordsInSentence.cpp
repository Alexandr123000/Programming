#include <iostream>
using namespace std;

int main()
{
    string words_string = "This is a words string.";
    int words_counter = 0;
    
    for(int i = 0; i < words_string.length(); i++) //words counting
    {
        if (words_string[i] == ' ')
        {
            words_counter++;
        }
        if (i+1 == words_string.length())
        {
            words_counter++;
        }
    }
    
    cout << "Number of words in the sentence: " << words_counter << endl;
    
    return 0;
}
