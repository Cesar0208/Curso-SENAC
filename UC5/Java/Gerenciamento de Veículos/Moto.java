public class Moto extends Veiculo implements Operacoes{
    //Atributo
    private int cilindradas;

    //Método Construtor
    public Moto(String marca, String modelo, int ano, double preco, boolean disponivel, int cilindradas) {
        super(marca, modelo, ano, preco, disponivel);
        this.cilindradas = cilindradas;
    }

    //Método GET e SET
    public int getCilindradas() {
        return cilindradas;
    }

    public void setCilindradas(int cilindradas) {
        this.cilindradas = cilindradas;
    }

    //Métodos Personalizados
    @Override
    public void ligar() {
        System.out.println("A moto está ligando!");
    }

    @Override

    public void desligar() {
        System.out.println("A moto foi desligada!");
    }

    @Override
    public void exibirInformacoes() {
        System.out.println("Marca: " + getMarca());
        System.out.println("Modelo: " + getModelo());
        System.out.println("Ano: " + getAno());
        System.out.println("Preço: " + getPreco());
        System.out.println("Disponível: " + getDisponivel());
        System.out.println("Cilindradas: " + getCilindradas());
    }

    @Override
    public double calcularSeguro() {
        return getPreco() * 0.06 * (1 + (2025 - getAno()) * 0.01);
    }
    
}
