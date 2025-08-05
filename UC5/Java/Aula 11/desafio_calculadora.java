package aula11_05_08_25;

import java.util.Scanner;

public class desafio_calculadora {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		while (true) {
			double resultado = 0;
			try {
				System.out.println("\nBem vindo a calculadora");
				
				System.out.print("Digite o primeiro número: ");
				double num1 = Double.parseDouble(scanner.nextLine().replace(",", "."));
				
				System.out.print("Digite o segundo número: ");
				double num2 = Double.parseDouble(scanner.nextLine().replace(",", "."));
				
				System.out.println("Escolha uma operação:");
				System.out.println("1 - Soma");
				System.out.println("2 - Subtração");
				System.out.println("3 - Multiplicação");
				System.out.println("4 - Divisão");
				System.out.println("0 - Sair");
				System.out.print("Escolha uma opção: ");
				int opcao = Integer.parseInt(scanner.nextLine());
				
				switch (opcao) {
					case 0: {
						System.out.println("Saiu da calculadora");
						System.exit(0);
					}
					case 1: {
						resultado = num1 + num2;
						System.out.printf("A soma de %.2f + %.2f = %.2f", num1, num2, resultado);
						break;
					}
					case 2: {
						resultado = num1 - num2;
						System.out.printf("A subtração de %.2f - %.2f = %.2f", num1, num2, resultado);
						break;
					}
					case 3: {
						resultado = num1 * num2;
						System.out.printf("A multiplicação de %.2f * %.2f = %.2f", num1, num2, resultado);
						break;
					}
					case 4: {
						resultado = num1 / num2;
						System.out.printf("A divisão de %.2f / %.2f = %.2f", num1, num2, resultado);
						break;
					}
					default:
						System.out.println("Escolha uma opção válida.\n\n");
				}
				
			} catch (NumberFormatException e) {
				System.err.println("Valor informado incorretamente");
			}
		}
	}

}
