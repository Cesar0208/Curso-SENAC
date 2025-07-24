package aula02_15_07_25;

public class Mochila {
	//Atributos
	String cor;
	String marca;
	int qntBolsos;
	char aprovaDagua;
	
	//Métodos
	public void exibirDetalhes() {
		System.out.println("Cor: " + cor);
		System.out.println("Marca: " + marca);
		System.out.println("Quantidade de bolsos: " + qntBolsos);
		System.out.println("Aprova d'agua: " + aprovaDagua);
	}
	
	public void abrirMochila() {
		System.out.println("Abrindo a mochila: -Ziiiiiip");
	}
}
