package br.com.banco.model;

public abstract class Conta {
	//Atributos
	private int numero;
	private String titular;
	private double saldo;
	
	//Método construtor
	public Conta(int numero, String titular, double saldo) {
		this.numero = numero;
		this.titular = titular;
		this.saldo = saldo;
	}

	//Método GETs e SETs
	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getTitular() {
		return titular;
	}

	public void setTitular(String titular) {
		this.titular = titular;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	//Métodos
	public abstract void sacar(double valor);
	
	public abstract void depositar(double valor);
	
	public void exibirSaldo() {
		System.out.println("Saldo: R$" + saldo);
	}
	
	public double calcularTributo() {
		return getSaldo() * 0.1;
	}
	
}
