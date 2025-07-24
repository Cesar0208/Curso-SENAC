#include <stdio.h>

int main() {
    char nomeProduto[50];
    int quantidade, numProdutos;
    float preco, totalProduto, totalDia;
    char continuar;

    do {
        totalDia = 0;
        printf("\n--- Registro de vendas ---\n");
        printf("Quantos produtos diferentes foram usados hoje? ");
        scanf("%d", &numProdutos);

        for (int i = 1; i <= numProdutos; i++) {
            printf("\nProduto %d:\n", i);

            printf("Nome do produto: ");
            scanf(" %[^\n]s", nomeProduto);

            printf("Quantidade vendida: ");
            scanf("%d", &quantidade);

            while (quantidade <= 0) {
                printf("Quantidade invalida. Digite novamente.\n");
                printf("Quantidade vendida: ");
                scanf("%d", &quantidade);
            }

            printf("Preco unitario: R$");
            scanf("%f", &preco);

            while (preco <= 0) {
                printf("Preco invalido. Digite novamente.\n");
                printf("Preco unitario: R$");
                scanf("%f", &preco);
            }

            totalProduto = quantidade * preco;
            printf("Total do produto %s: R$ %.2f\n", nomeProduto, totalProduto);

            totalDia += totalProduto;
        }

        printf("\nTotal geral de vendas do dia: R$ %.2f\n", totalDia);

        printf("\nDeseja registrar outro dia de vendas? (s/n): ");
        scanf(" %c", &continuar);

    } while (continuar == 's' || continuar == 'S');

    printf("\nEncerrando o sistema de vendas.");
    return 0;
}