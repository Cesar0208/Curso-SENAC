package aula12_06_08_25;

import java.util.Scanner;

public class MenuApp {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		UsuarioService usuarioService = new UsuarioService();
		
		while (true) {
			System.out.println("==== Menu ====");
			System.out.println("1 - Cadastrar usuário");
			System.out.println("2 - Listar usuários");
			System.out.println("3 - Sair");
			System.out.print("Digite sua opção: ");
			int opcao = scanner.nextInt();
			scanner.nextLine();
			
			switch (opcao) {
			case 1:
				System.out.print("Digite o nome do usuário: ");
				String nome = scanner.nextLine();
				usuarioService.cadastrarUsuario(nome);
				break;

			case 2:
				usuarioService.listarUsuarios();
				break;
			case 3:
				System.out.println("Saindo do sistema");
				System.exit(0);
				
			default:
				System.out.println("Opção inválida");
				break;
			}
		}

	}

}
