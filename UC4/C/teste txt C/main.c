#include <stdio.h>
#include <string.h>

#define MAX_LINHA 256 //


void cadastrar_funcionarios() {
    FILE *fp = fopen("./dados/funcionarios.txt", "a");
    if (fp == NULL) {
        printf("Erro ao abrir o arquivo.");
        return;
    }

    char nome[30], email[100], senha[20];

    printf("Digite o nome: ");
    fgets(nome, sizeof(nome), stdin);
    nome[strcspn(nome, "\n")] = 0;

    printf("Digite o email: ");
    fgets(email, sizeof(email), stdin);
    email[strcspn(email, "\n")] = 0;

    printf("Digite a senha: ");
    fgets(senha, sizeof(senha), stdin);
    senha[strcspn(senha, "\n")] = 0;

    fprintf(fp, "====================\nNome: %s\nEmail: %s\nSenha: %s\n====================\n", nome, email, senha);
    fclose(fp);

    printf("Cadastrado com sucesso");
}

int loginF(const char *arquivo_db, const char *email_entra, const char *senha_entra) {
    FILE *arquivo = fopen(arquivo_db, "r");
    if (arquivo == NULL) {
        printf("Arquivo nao encontrado.");
        return 0;
    }

    char linha[MAX_LINHA];
    char nome[100], email[100], senha[100];
    int encontrou = 0;

    while (fgets(linha, MAX_LINHA, arquivo)) {
        if (strncmp(linha, "Nome:", 5) == 0) {
            sscanf(linha, "Nome: %[^\n]", nome);
        } else if (strncmp(linha, "Email:", 6) == 0) {
            sscanf(linha, "Email: %[^\n]", email);
        } else if(strncmp(linha, "Senha:", 6) == 0) {
            sscanf(linha, "Senha: %[^\n]", senha);

            if (strcmp(email_entra, email) == 0) {
                if (strcmp(senha_entra, senha) == 0) {
                    printf("Login bem sucedido. Bem vindo: %s.\n", nome); //Colocar as funcionalidades quando entrar
                    encontrou = 1;
                    break;
                } else {
                    printf("Email encontrado, mas a senha está errada para o email: %s", email);
                    encontrou = 1;
                    break;
                }
            }
        }
    }

    fclose(arquivo);

    if (encontrou != 1) {
        printf("Email nao encontrado.");
        return 0;
    }

    return 1;
}

int main() {
    char email[100], senha[100];
    // cadastrar_funcionarios();

    //Opcoes para login
    printf("Login\n");
    printf("Email: ");
    fgets(email, sizeof(email), stdin);
    email[strcspn(email, "\n")] = 0;

    printf("Senha: ");
    fgets(senha, sizeof(senha), stdin);
    senha[strcspn(senha, "\n")] = 0;

    // Chama a função de login passando os dados e o nome do arquivo
    loginF("dados/funcionarios.txt", email, senha);
}