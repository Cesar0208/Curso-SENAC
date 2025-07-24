package atividadeAula06;

public class Cachorro extends Animal implements Terrestre {
	public Cachorro(String nome) {
		super(nome);
	}

	@Override
	public void emitirSom() {
		System.out.println("O cachorro está latindo.");
	}

	public void andar() {
		System.out.println("O cachorro está andando.");
	}

}
