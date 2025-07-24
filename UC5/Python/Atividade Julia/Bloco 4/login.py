usuarioC = 'Admin'
senhaC = '1234'

while True:
    print('Bem vindo a área de login')
    loginU = str(input('Digite o seu usuário: '))
    senhaU = str(input('Digite a sua senha: '))

    if usuarioC == loginU and senhaC == senhaU:
        print('Login realizado.')
        break
    else:
        print('Usuário ou senha incorretas.')