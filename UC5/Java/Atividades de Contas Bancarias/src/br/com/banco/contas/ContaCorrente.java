package br.com.banco.contas;

import br.com.banco.model.Conta;
import br.com.banco.model.Tributavel;

public class ContaCorrente extends Conta implements Tributavel {
	//Método Construtor
	public ContaCorrente(int numero, String titular, double saldo) {
		super(numero, titular, saldo);
	}

	@Override
	public void sacar(double valor) {
		System.out.println("Sacando: R$" + valor);
		setSaldo(getSaldo() - valor);
	}
	
	@Override
	public void depositar(double valor) {
		setSaldo(getSaldo() + valor);
	}
	
}
