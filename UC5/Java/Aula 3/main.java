package aula03_16_07_25;

public class main {

	public static void main(String[] args) {
		Pessoa pessoa1 = new Pessoa("Joana", 19, 1.66, 'F', "000.000.000-11");
		
		/* pessoa1.apresentar();
		pessoa1.criarContaBancaria();
		pessoa1.consultarSaldo();
		pessoa1.depositar(100);
		pessoa1.consultarSaldo();
		pessoa1.sacar(90); */
		
		System.out.println(pessoa1.getNome());
		pessoa1.setNome("Cleber");
		System.out.println(pessoa1.getNome());
		
		Pessoa pessoa2 = new Pessoa("Jão", 88, 1.50, 'M', "111.111.111-22");
		pessoa2.apresentar(); 
	}
}