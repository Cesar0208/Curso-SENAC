package aula03_16_07_25;

public class Pessoa {
	//Atributos
	public String nome;
	public int idade;
	public double altura;
	public char genero;
	private String cpf;
	private double contaBancaria;
	
	//Método Construtor
	public Pessoa(String nome, int idade, double altura, char genero, String cpf) {
		this.nome = nome;
		this.idade = idade;
		this.altura = altura;
		this.genero = genero;
		this.cpf = cpf;
	}
	
	//Metodos GET e SET
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}
	
	//Métodos
	public void apresentar() {
		System.out.println("Meu nome é: " + nome + " e tenho: " + idade + " anos de idade.");
	}
	
	public void criarContaBancaria() {
		if (idade >= 18) {
			contaBancaria = 0.00;
			System.out.println("Sua conta foi criada com sucesso.");
		} else {
			System.err.println("Menor de idade não pode criar conta bancaria.");
		}
	}
	
	public void depositar(double valor) {
		contaBancaria += valor;
		System.out.println("Valor depositado na sua conta.");
	}
	
	public void sacar(double valor) {
		if (contaBancaria >= valor) {
			contaBancaria -= valor;
			System.out.printf("Valor de R$%.2f retirado da sua conta, restando um total de R$%.2f\n", valor, contaBancaria);
		} else {
			System.err.println("Valor sacado maior que tem na conta.");
		}
	}
	
	public void consultarSaldo() {
		System.out.println(contaBancaria);
	}

}
