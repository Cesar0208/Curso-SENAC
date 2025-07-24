package atividadeAula06;

public class main {

	public static void main(String[] args) {
		Cachorro c1 = new Cachorro("Clebin");
		c1.emitirSom();
		c1.dormir();
		c1.andar();

		System.out.println();

		Peixe p1 = new Peixe("Junin");
		p1.emitirSom();
		p1.dormir();
		p1.nadar();

		System.out.println();

		Ave a1 = new Ave("Pedrin");
		a1.emitirSom();
		a1.dormir();
		a1.voar();

	}

}
