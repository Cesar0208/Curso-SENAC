package atividadeAula06;

public class Ave extends Animal implements Aereo {
	public Ave(String nome) {
		super(nome);
	}

	@Override
	public void emitirSom() {
		System.out.println("A ave faz piu piu.");
	}

	public void voar() {
		System.out.println("A ave está voando.");
	}
}
