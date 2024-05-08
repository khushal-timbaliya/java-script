#include <stdio.h>

int main() {
    int num, reversedNum = 0, remainder;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    while(num != 0) {
        remainder = num % 10;
        reversedNum = reversedNum * 10 + remainder;
        num /= 10;
    }
    
    printf("Reversed number: %d\n", reversedNum);
    
    return 0;
}
