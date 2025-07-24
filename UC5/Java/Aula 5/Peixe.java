public class Peixe extends Animal {
    private String corEscama;

    //Método Construtor
    public Peixe(double peso, int idade, int qtdMembros, String corEscama) {
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
        System.out.println("O peixe está nadando");
    }

    @Override
    public void alimentar() {
        System.out.println("O peixe está se alimentando");
    }

    @Override
    public void emitirSom() {
        System.out.println("O peixe está se fazendo barulho");
    }

    public void soltarBolha() {
        System.out.println("Glub Glub Glub Bolhas");
    }

    
}
