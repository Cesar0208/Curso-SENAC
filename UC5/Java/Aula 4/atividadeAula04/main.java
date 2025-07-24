package atividadeAula04;

public class main {

	public static void main(String[] args) {
		
		Veiculo veiculo1 = new Veiculo();
		
		Carro carro1 = new Carro();
		
		Bicicleta bicicleta1 = new Bicicleta();
		
		veiculo1.mover();
		carro1.mover();
		bicicleta1.mover();
		
		System.out.println();
		
		System.out.println(veiculo1.tipoCombustivel());
		System.out.println(carro1.tipoCombustivel());
		System.out.println(bicicleta1.tipoCombustivel());
	}

}
