package Sistema_Pedidos_Lanchonete;

import java.util.Scanner;

public class main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		String[] produtos = {"X-Tudo", "X-Salada", "X-Egg","Coca Cola 2L", "Agua", "Suco"};
		int[] precos = {26, 22, 19, 10, 3, 12};
		int soma = 0;
		
		String[] notaFiscal = new String[20];
		int qntNotaFiscal = 0;
		
		System.out.println("Bem vindo ao Cesar's Lanches");
	
		while (true) {
			System.out.println("Menu");
			for(int i = 0; i < 6; i++) {
				System.out.println((i + 1) + " - " + produtos[i] + " - R$" + precos[i]);
			}
			System.out.println("Digite 9 para pagar");
			System.out.println("Digite 0 para sair");
			
			System.out.print("Digite sua opção: ");
			int opcao = scanner.nextInt();
			
			if (opcao == 0) {
				System.out.println("Obrigado por acessar nossa lanchonete.");
				break;
			} else if (opcao == 1) {
				System.out.print("Digite a quantidade: ");
				int quantidade = scanner.nextInt();
				soma += quantidade * precos[0];
				notaFiscal[qntNotaFiscal] = quantidade + " - X-Tudo - R$" + quantidade * precos[0];
				qntNotaFiscal++;
				
			} else if(opcao == 2) {
				System.out.print("Digite a quantidade: ");
				int quantidade = scanner.nextInt();
				soma += quantidade * precos[1];
				notaFiscal[qntNotaFiscal] = quantidade + " - X-Salada - R$" + quantidade * precos[1];
				qntNotaFiscal++;
				
			} else if(opcao == 3) {
				System.out.print("Digite a quantidade: ");
				int quantidade = scanner.nextInt();
				soma += quantidade * precos[2];
				notaFiscal[qntNotaFiscal] = quantidade + " - X-Egg - R$" + quantidade * precos[2];
				qntNotaFiscal++;
				
			} else if(opcao == 4) {
				System.out.print("Digite a quantidade: ");
				int quantidade = scanner.nextInt();
				soma += quantidade * precos[3];
				notaFiscal[qntNotaFiscal] = quantidade + " - Coca Cola 2L - R$" + quantidade * precos[3];
				qntNotaFiscal++;
				
			} else if(opcao == 5) {
				System.out.print("Digite a quantidade: ");
				int quantidade = scanner.nextInt();
				soma += quantidade * precos[4];
				notaFiscal[qntNotaFiscal] = quantidade + " - Agua - R$" + quantidade * precos[4];
				qntNotaFiscal++;
				
			} else if(opcao == 6) {
				System.out.print("Digite a quantidade: ");
				int quantidade = scanner.nextInt();
				soma += quantidade * precos[5];
				notaFiscal[qntNotaFiscal] = quantidade + " - X-Egg - R$" + quantidade * precos[5];
				qntNotaFiscal++;
				
			} else if (opcao == 9) {
				System.out.println("\n\n=============================");
				for(int i = 0; i < qntNotaFiscal; i++) {
					System.out.println(notaFiscal[i]);
				}
				System.out.println("Valor total: R$" + soma);
				System.out.println("Obrigado por comprar conosco!");
				break;
			}
		}
		
		scanner.close();
	}

}
