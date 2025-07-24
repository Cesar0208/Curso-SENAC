package atividadeAula03;

public class main {

	public static void main(String[] args) {
		
		Livro livro1 = new Livro("O Pequeno Principe", "Antoine de Saint-Exupéry", 1943);
		
		//Mostrar informacoes
		livro1.apresentar();
		
		//Mudar uma informacao
		livro1.setTitulo("A arte da imitação");
		livro1.setAutor("Cleber jonas");
		livro1.setAnoPublicacao(1990);
		
		//Mostrar dado modificado
		livro1.apresentar();
	}

}
