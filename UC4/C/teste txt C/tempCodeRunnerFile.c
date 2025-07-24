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