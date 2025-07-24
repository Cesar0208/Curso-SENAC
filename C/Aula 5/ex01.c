#include <stdio.h>

int soma(int a, int b) {
    return a + b;
}

int main() {
    int a = 3, b = 7;

    printf("A soma de %d e %d = %d.", a, b, soma(a,b));
}