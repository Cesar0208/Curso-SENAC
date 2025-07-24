package aula04_17_07_25;

public class main {

	public static void main(String[] args) {

		Cachorro dog = new Cachorro("Clebin", 6, 12);
		
		System.out.println(dog.getNome());
		dog.emitirSom();
		
		Animal animal1 = new Animal("Neve", 5, 32);
		animal1.emitirSom();

	}

}
