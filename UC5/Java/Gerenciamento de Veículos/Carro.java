public class Carro extends Veiculo implements Operacoes{
    //Atributo
    private int numeroPortas;

    //Método Construtor
    public Carro(String marca, String modelo, int ano, double preco, boolean disponivel, int numeroPortas) {
        super(marca, modelo, ano, preco, disponivel);
        this.numeroPortas = numeroPortas;
    }
    
    //Métodos GET e SET
    public int getNumeroPortas() {
        return numeroPortas;
    }

    public void setNumeroPortas(int numeroPortas) {
        this.numeroPortas = numeroPortas;
    }
    
    //Métodos sobrescrevidos
    @Override
    public void ligar() {
        System.out.println("O carro está ligando!");
    }

    @Override

    public void desligar() {
        System.out.println("O carro foi desligado!");
    }

    @Override
    public void exibirInformacoes() {
        System.out.println("Marca: " + getMarca());
        System.out.println("Modelo: " + getModelo());
        System.out.println("Ano: " + getAno());
        System.out.println("Preço: " + getPreco());
        System.out.println("Disponível: " + getDisponivel());
        System.out.println("Número de portas: " + getNumeroPortas());
    }

    @Override
    public double calcularSeguro() {
        return getPreco() * 0.04 * (1 + (2025 - getAno()) * 0.01);
    }

}
