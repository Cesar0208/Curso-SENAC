package simulador_atendimento_AB;

import java.util.Scanner;

public class menuBancario {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		String cliente = "Cesar";
		double saldo = 0;

		while (true) {
			System.out.println(cliente + ", bem vindo ao atendimento do banco!");
			System.out.println("Escolha uma opção");
			System.out.println("1 - Ver saldo");
			System.out.println("2 - Fazer depósito");
			System.out.println("3 - Realizar saque");
			System.out.println("0 - Sair");
			System.out.print("Digite sua opção: ");
			int opcao = scanner.nextInt();

			switch (opcao) {
			case 0:
				System.out.println("\nObrigado por acessar o banco, volte sempre.");
				scanner.close();
				System.exit(0);

			case 1:
				System.out.println("\nSeu saldo atual é de R$" + saldo);
				break;

			case 2:
				System.out.print("\nDigite o valor para depósito: ");
				double deposito = scanner.nextDouble();
				saldo += deposito;
				System.out.println("Seu saldo atual é de R$" + saldo);
				break;

			case 3:
				System.out.print("\nDigite o valor para saque: ");
				double saque = scanner.nextDouble();

				if (saldo >= saque) {
					System.out.println("\nRealizando saque de R$" + saque);
					saldo -= saque;
					System.out.println("Seu saldo atual é de R$" + saldo);
					break;

				} else {
					System.out.println("\nSaldo insuficiente, tente sacar novamente.");
					break;
				}

			default:
				System.err.println("\nOpção inválida, tente novamente");
				break;
			}
		}

	}

}
