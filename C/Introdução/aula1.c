#include <stdio.h>

int main() {
    // Variáveis
    int idade;
    float valorDoPgto;
    double velParticula;
    char tipoHabMotor;

    printf("Informe a idade: ");
    scanf("%d", &idade);
    printf("Informe o valor do pagamento: ");
    scanf("%f", &valorDoPgto);
    printf("Informe a velocidade da partícula: ");
    scanf("%lf", &velParticula);
    printf("Informe o tipode habilitação: ");
    scanf(" %c", &tipoHabMotor);

    printf("Dados informados: %d, %.2f, %.2f, %c", idade, valorDoPgto, velParticula, tipoHabMotor);

    return 0;
}