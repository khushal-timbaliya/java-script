#include <stdio.h>

int main() {
    char input[100];
    int length = 0;

    printf("Enter any string: ");
    scanf("%s", input);

    while (input[length] != '\0') {
        length++;
    }

    printf("Length is: %d\n", length);

    return 0;
}