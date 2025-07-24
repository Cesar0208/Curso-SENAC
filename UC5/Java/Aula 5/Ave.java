public class Ave extends Animal {
    private String corPena;

    //Método Construtor
    public Ave(double peso, int idade, int qtdMembros, String corPena) {
        super(peso, idade, qtdMembros);
        this.corPena = corPena;
    }

    //Método GET e SET
    public String getCorPena() {
        return corPena;
    }

    public void setCorPena(String corPena) {
        this.corPena = corPena;
    }

    //Métodos personalizados
    @Override
    public void locomover() {
        System.out.println("A ave está voando");
    }

    @Override
    public void alimentar() {
        System.out.println("A ave está comendo semente");
    }

    @Override
    public void emitirSom() {
        System.out.println("A ave está cantando");
    }

    public void fazerNinho() {
        System.out.println("Fazendo seu ninho com penas e galhos.");
    }
    
}
