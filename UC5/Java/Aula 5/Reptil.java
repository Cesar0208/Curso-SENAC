public class Reptil extends Animal {
    private String corEscama;

    //Método Construtor
    public Reptil(double peso, int idade, int qtdMembros, String corEscama) {
        super(peso, idade, qtdMembros);
        this.corEscama = corEscama;
    }
    
    //Métodos GET e SET
    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }
    
    //Métodos personalizados
    @Override
    public void locomover() {
        System.out.println("O reptil está se movendo");
    }

    @Override
    public void alimentar() {
        System.out.println("O reptil está comendo carne");
    }

    @Override
    public void emitirSom() {
        System.out.println("O reptil está fazendo som");
    }
    
}
