package aula09_31_07_25;

import java.util.Scanner;

public class main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Quantos alunos? ");
		int quantidadeA = scanner.nextInt();
		
		double[] notas = new double[quantidadeA];
		double soma = 0;
		double maior = Double.MIN_VALUE;
		double menor = Double.MAX_VALUE;
		
		for (int i = 0; i < quantidadeA; i++) {
			System.out.println("Digite a nota do aluno " + (i + 1) + ": ");
			notas[i] = scanner.nextDouble();
			soma += notas[i];
			
			if (notas[i] > maior) {
				maior = notas[i];
			}
			
			if (notas[i] < menor) {
				menor = notas[i];
			}
		}
		
		double media = soma / quantidadeA;
		
		System.out.println("\nMédia das notas: " + media);
		System.out.println("Maior nota: " + maior);
		System.out.println("Menor nota: " + menor);
		
		scanner.close();

	}

}
