public class main {
    public static void main(String[] args) {
        Carro carro1 = new Carro("Fiat", "500", 2025, 40000, true,2);
        Carro carro2 = new Carro("Fiat", "UNO", 1980, 22000, false,4);

        Moto moto1 = new Moto("Kawasaki", "Ninja", 2025, 50000, true, 450);
        Moto moto2 = new Moto("BMW", "G 310", 2025, 65000, false, 313);

        Caminhao caminhao1 = new Caminhao("Scania", "T 113", 1998, 200000, true, 20);
        Caminhao caminhao2 = new Caminhao("Volvo", "540", 2024, 450000, false, 37);

        carro1.exibirInformacoes();
        carro1.ligar();
        carro1.desligar();
        System.out.println("Valor do seguro: " + carro1.calcularSeguro());

        System.out.println();

        carro2.exibirInformacoes();
        carro2.ligar();
        carro2.desligar();
        System.out.println("Valor do seguro: " + carro2.calcularSeguro());

        System.out.println();

        moto1.exibirInformacoes();
        moto1.ligar();
        moto1.desligar();
        System.out.println("Valor do seguro: " + moto1.calcularSeguro());

        System.out.println();

        moto2.exibirInformacoes();
        moto2.ligar();
        moto2.desligar();
        System.out.println("Valor do seguro: " + moto2.calcularSeguro());

        System.out.println();

        caminhao1.exibirInformacoes();
        caminhao1.ligar();
        caminhao1.desligar();
        System.out.println("Valor do seguro: " + caminhao1.calcularSeguro());

        System.out.println();

        caminhao2.exibirInformacoes();
        caminhao2.ligar();
        caminhao2.desligar();
        System.out.println("Valor do seguro: " + caminhao2.calcularSeguro());
    }
}
