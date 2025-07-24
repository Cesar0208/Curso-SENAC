package aula04_17_07_25;

public class Cachorro extends Animal{

	public Cachorro(String nome, int idade, double peso) {
		super(nome, idade, peso);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void emitirSom() {
		System.out.println("Au Au Au");
	}
}