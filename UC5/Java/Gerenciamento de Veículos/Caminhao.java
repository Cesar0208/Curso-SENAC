public class Caminhao  extends Veiculo implements Operacoes{
    //Atributo
    private double capacidadeCarga;
    
    //Método Construtor
    public Caminhao(String marca, String modelo, int ano, double preco, boolean disponivel, double capacidadeCarga) {
        super(marca, modelo, ano, preco, disponivel);
        this.capacidadeCarga = capacidadeCarga;
    }

    //Método GET e SET
    public double getCapacidadeCarga() {
        return capacidadeCarga;
    }

    public void setCapacidadeCarga(double capacidadeCarga) {
        this.capacidadeCarga = capacidadeCarga;
    }

    //Métodos Personalizados
    @Override
    public void ligar() {
        System.out.println("O caminhão está ligando!");
    }

    @Override

    public void desligar() {
        System.out.println("O caminhão foi desligado!");
    }

    @Override
    public void exibirInformacoes() {
        System.out.println("Marca: " + getMarca());
        System.out.println("Modelo: " + getModelo());
        System.out.println("Ano: " + getAno());
        System.out.println("Preço: " + getPreco());
        System.out.println("Disponível: " + getDisponivel());
        System.out.println("Capacidade de carga: " + getCapacidadeCarga());
    }

    @Override
    public double calcularSeguro() {
        return getPreco() * 0.05 * (1 + (2025 - getAno()) * 0.01);
    }

    
}
