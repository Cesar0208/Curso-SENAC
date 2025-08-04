package aula10_04_08_25;

import java.util.Scanner;

public class main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		String[] nomes = new String[5];
		double[] notas1 = new double[5];
		double[] notas2 = new double[5];
		double[] medias = new double[5];
		
		for (int i = 0; i < 5; i++) {
			System.out.print("Digite o nome do aluno " + (i + 1) + ": ");
			nomes[i] = scanner.nextLine();
			
			System.out.print("Digite a nota 1: ");
			notas1[i] = scanner.nextDouble();
			
			System.out.print("Digite a nota 2: ");
			notas2[i] = scanner.nextDouble();
			scanner.nextLine();
			
			medias[i] = (notas1[i] + notas2[i]) / 2;
			
			System.out.println();
		}
		scanner.close();
		
		System.out.println("Resultados finais:");
		for(int i = 0; i < 5; i++) {
			System.out.println(nomes[i] + " - Média: " + medias[i]);
		}
	}

}
