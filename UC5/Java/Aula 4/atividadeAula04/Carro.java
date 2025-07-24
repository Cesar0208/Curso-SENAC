package atividadeAula04;

public class Carro extends Veiculo{

	@Override
	public void mover() {
		System.out.println("O carro está se movendo.");
	}
	
	@Override
	public String tipoCombustivel() {
		return "Gasolina";
	}
}
