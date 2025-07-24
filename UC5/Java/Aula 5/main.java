public class main {
    public static void main(String[] args) {
        //Objetos Animais
        Mamifero Cachorro = new Mamifero(0, 0, 0, null);
        Cachorro.setPeso(12.5);
        Cachorro.setIdade(3);
        Cachorro.setQtdMembros(4);
        Cachorro.setCorPelo("Caramelo");

        Cachorro.locomover();
        Cachorro.alimentar();
        Cachorro.emitirSom();
        Cachorro.apresentar();

        System.out.println();

        Mamifero Canguru = new Mamifero(0, 0, 0, null);
        Canguru.setPeso(65.3);
        Canguru.setIdade(6);
        Canguru.setQtdMembros(4);

        Canguru.locomover();
        Canguru.alimentar();
        Canguru.emitirSom();
        Canguru.apresentar();

        System.out.println();

        Reptil Tartaruga = new Reptil(0, 0, 0, null);
        Tartaruga.setPeso(5);
        Tartaruga.setIdade(35);
        Tartaruga.setQtdMembros(4);
        Tartaruga.setCorEscama("Verde escuro");

        Tartaruga.locomover();
        Tartaruga.alimentar();
        Tartaruga.emitirSom();
        Tartaruga.apresentar();

        System.out.println();

        Peixe PeixeDourado = new Peixe(0, 0, 0, null);
        PeixeDourado.setPeso(0.200);
        PeixeDourado.setIdade(1);
        PeixeDourado.setQtdMembros(3);
        PeixeDourado.setCorEscama("Dourado");

        PeixeDourado.locomover();
        PeixeDourado.alimentar();
        PeixeDourado.emitirSom();
        PeixeDourado.apresentar();

        System.out.println();

        Ave AraraAzul = new Ave(0, 0, 0, null);
        AraraAzul.setPeso(0.500);
        AraraAzul.setIdade(3);
        AraraAzul.setQtdMembros(4);
        AraraAzul.setCorPena("Azul");

        AraraAzul.locomover();
        AraraAzul.alimentar();
        AraraAzul.emitirSom();
        AraraAzul.apresentar();
    }
}
