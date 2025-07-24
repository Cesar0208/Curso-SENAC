package atividadeAula03;

public class Livro {
	//Atributos
	private String titulo;
	private String autor;
	private int anoPublicacao;
	
	//Método construtor
	public Livro(String titulo, String autor, int anoPublicacao) {
		this.titulo = titulo;
		this.autor = autor;
		this.anoPublicacao = anoPublicacao;
	}
		
	//Métodos GET e SET
	public void setTitulo(String titulo) {
		System.out.println("Trocando o titulo para: " + titulo);
		this.titulo = titulo;
	}
	
	public String getTitulo() {
		return titulo;
	}
	
	public void setAutor(String autor) {
		System.out.println("Trocando o autor para: " + autor);
		this.autor = autor;
	}
	
	public String getAutor() {
		return autor;
	}
	
	public void setAnoPublicacao(int anoPublicacao) {
		System.out.println("Trocando o ano de publicação para: " + anoPublicacao);
		this.anoPublicacao = anoPublicacao;
	}
	
	public int getAnoPublicacao() {
		return anoPublicacao;
	}
	
	//Apresentação
	public void apresentar() {
		System.out.println("Titulo: " + getTitulo());
		System.out.println("Autor: " + getAutor());
		System.out.println("Ano: " + getAnoPublicacao());
	}
}
