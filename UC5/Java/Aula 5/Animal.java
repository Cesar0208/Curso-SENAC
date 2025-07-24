public class Animal {
    //Atributos
    private double peso;
    private int idade;
    private int qtdMembros;

    //Método Construtor
    public Animal(double peso, int idade, int qtdMembros) {
        this.peso = peso;
        this.idade = idade;
        this.qtdMembros = qtdMembros;
    }

    //Métodos GET e SET
    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getQtdMembros() {
        return qtdMembros;
    }

    public void setQtdMembros(int qtdMembros) {
        this.qtdMembros = qtdMembros;
    }

    //Métodos personalizados

    public void locomover() {
        System.out.println("O animal está se movendo");
    }

    public void alimentar() {
        System.out.println("O animal está sendo alimentado");
    }

    public void emitirSom() {
        System.out.println("O animal está fazendo barulho");
    }
    
    public void apresentar() {
        System.out.printf("Esse mamífero tem %.2f Kg, %d anos de idade e %d membros\n", peso, idade, qtdMembros);
    }
}
