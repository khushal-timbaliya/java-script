#include<stdio.h>
int main()
{
    int a;

    printf("Enter Size Of Array :");
    scanf("%d",&a);

    int arr[a],sum=0;

    for (int i = 0; i < a; i++)
    {
        printf("Enter Value Of Array :");
        scanf("%d",&arr[i]);

        sum += arr[i];
    }
    printf("The Sum of an Array :%d",sum);
    
}