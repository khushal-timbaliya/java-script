#include <stdio.h>

int main() {
    int n, i, first = 0, second = 1, next;
    
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    
    printf("Fibonacci series: ");
    
    for(i = 0; i < n; ++i) {
        printf("%d, ", first);
        next = first + second;
        first = second;
        second = next;
    }
    
    printf("\n");
    
    return 0;
}
