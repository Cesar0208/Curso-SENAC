package atividadeAula04;

public class Bicicleta extends Veiculo{
	
	@Override
	public void mover() {
		System.out.println("A bicicleta está sendo movimentanda.");
	}
	
	@Override
	public String tipoCombustivel() {
		return "Nenhuma (força nos cambitos)";
	}
}
