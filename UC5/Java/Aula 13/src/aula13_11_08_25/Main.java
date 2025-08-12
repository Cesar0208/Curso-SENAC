package aula13_11_08_25;

import java.util.Scanner;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ClienteDAO dao = new ClienteDAO();
		
		while(true) {
			System.out.println("Bem vindo ao sistema de cadastro de clientes");
			System.out.println("1 - Cadastro de clientes");
			System.out.println("2 - Listar clientes");
			System.out.println("3 - Atualizar dados");
			System.out.println("4 - Excluir cliente");
			System.out.println("0 - Sair");
			System.out.print("Digite sua opção: ");
			
			int opcao = scanner.nextInt();
			scanner.nextLine();
			
			switch (opcao) {
			case 0:
				System.out.println("Saindo do sistema!!");
				scanner.close();
				System.exit(0);
				
			case 1:
				System.out.print("Nome: ");
				String nome = scanner.nextLine();
				System.out.print("Email: ");
				String email = scanner.nextLine();
				
				Cliente cliente = new Cliente(nome, email);
				dao.inserir(cliente);
				break;
				
			case 2:
				List<Cliente> clientes = dao.listarClientes();
				System.out.println("\n--- Lista de Cliente ---");
				for (Cliente c : clientes) {
					System.out.println(c.getId() + " - " + c.getNome() + " (" + c.getEmail() + ")");
				}
				break;
				
			case 3:
				System.out.print("ID do cliente para atualizar:");
				int idAtualizar = scanner.nextInt();
				scanner.nextLine();
				System.out.print("Novo nome:");
				String novoNome = scanner.nextLine();
				System.out.print("Novo email: ");
				String novoEmail = scanner.nextLine();
				
				Cliente clienteAtualizado = new Cliente(idAtualizar, novoNome, novoEmail);
				dao.atualizar(clienteAtualizado);
				break;
				
			case 4:
				System.out.print("ID do cliente para deletar: ");
				int idDeletar = scanner.nextInt();
				dao.deletar(idDeletar);
				break;

			default:
				System.out.println("Opção inválida, tente novamente.");
				break;
			}
		}

	}

}
