package aula12_06_08_25;

import java.util.ArrayList;
import java.util.List;

public class UsuarioService {
	
	private List<String> usuarios;
	
	public UsuarioService() {
		usuarios = new ArrayList<>();
	}
	
	public void cadastrarUsuario(String nome) {
		if (nome == null || nome.trim().isEmpty()) {
			System.out.println("Nome inválido, não foi possível cadastrar.");
			return;
			
		} else {
			usuarios.add(nome);
			System.out.println("Usuário " + nome + " cadastrado com sucesso");
		}
	}
	
	public void listarUsuarios() {
		if (usuarios.isEmpty()) {
			System.out.println("Nenhum usuário cadastrado.");
		} else {
			System.out.println("Lista de usuários:");
			for (int i = 0; i < usuarios.size(); i++) {
				System.out.println((i + 1) + " - " + usuarios.get(i));
			}
		}
	}
}
