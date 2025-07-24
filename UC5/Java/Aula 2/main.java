package aula02_15_07_25;

public class main {

	public static void main(String[] args) {
		//Criar um objeto a partir de uma classe
		Mochila mochila1 = new Mochila();
		mochila1.cor = "Preto";
		mochila1.marca = "Adidas";
		mochila1.qntBolsos = 3;
		mochila1.aprovaDagua = 'S';
		
		Mochila mochila2 = new Mochila();
		mochila2.cor = "Azul";
		mochila2.marca = "Nike";
		mochila2.qntBolsos = 2;
		mochila2.aprovaDagua = 'N';
		
		mochila1.exibirDetalhes();
		mochila1.abrirMochila();
		System.out.println();
		mochila2.exibirDetalhes();
		mochila2.abrirMochila();
	}

}