public class Mamifero extends Animal {
    private String corPelo;

    //Método Construtor
    public Mamifero(double peso, int idade, int qtdMembros, String corPelo) {
        super(peso, idade, qtdMembros);
        this.corPelo = corPelo;
    }
    
    //Méetodo GET e SET
    public String getCorPelo() {
        return corPelo;
    }

    public void setCorPelo(String corPelo) {
        this.corPelo = corPelo;
    }

    //Métodos personalizados
    @Override
    public void locomover() {
        System.out.println("O mamífero está se movendo");
    }

    @Override
    public void alimentar() {
        System.out.println("O mamífero está sendo alimentado");
    }

    @Override
    public void emitirSom() {
        System.out.println("O mamífero está fazendo som.");
    }
}
