package br.com.banco.app;

import br.com.banco.contas.*;
import br.com.banco.model.*;


public class BancoApp {

	public static void main(String[] args) {
		Conta contaC = new ContaCorrente(1, "João", 0);
		System.out.println("Conta Corrente - " + contaC.getTitular());
		contaC.depositar(50);
		contaC.exibirSaldo();
		System.out.println("Tributo: R$" + contaC.calcularTributo());
		contaC.sacar(30);
		contaC.exibirSaldo();
		
		
		System.out.println();
		
		Conta contaP = new ContaPoupanca(2, "Maria", 0);
		System.out.println("Conta Poupança - " + contaP.getTitular());
		contaP.depositar(500);
		contaP.exibirSaldo();

	}

}
