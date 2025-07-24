package atividadeAula06;

public class Peixe extends Animal implements Aquatico {
	public Peixe(String nome) {
		super(nome);
	}

	@Override
	public void emitirSom() {
		System.out.println("O peixe está fazendo glub glub.");
	}

	public void nadar() {
		System.out.println("O peixe está nadando.");
	}
}
