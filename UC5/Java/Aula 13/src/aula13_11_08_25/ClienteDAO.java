package aula13_11_08_25;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ClienteDAO {
	
	//Verificar se email já existe
	public void inserir(Cliente cliente) {
	    String checarSql = "SELECT 1 FROM clientes WHERE email = ?";
	    
	    String inserirSql = "INSERT INTO clientes (nome, email) VALUES (?, ?)";
	    
	    try (Connection conn = Conexao.getConnection();
	         PreparedStatement checarStmt = conn.prepareStatement(checarSql)) {
	        
	        checarStmt.setString(1, cliente.getEmail());
	        
	        ResultSet rs = checarStmt.executeQuery();
	        
	        if (rs.next()) {
	            System.out.println("Já existe um cliente cadastrado com esse email: " + cliente.getEmail());
	        } else {
	            try (PreparedStatement inserirStmt = conn.prepareStatement(inserirSql)) {
	                inserirStmt.setString(1, cliente.getNome());
	                inserirStmt.setString(2, cliente.getEmail());
	                inserirStmt.executeUpdate();
	                
	                System.out.println("Cliente cadastrado com sucesso.");
	            }
	        }

	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}

	
	public List<Cliente> listarClientes() {
		List<Cliente> lista = new ArrayList<>();
		String sql = "SELECT * FROM clientes";
		
		try (Connection conn = Conexao.getConnection(); 
			PreparedStatement stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery()) {
			
			while (rs.next()) {
				Cliente cliente = new Cliente();
				cliente.setId(rs.getInt("id"));
				cliente.setNome(rs.getString("nome"));
				cliente.setEmail(rs.getString("email"));
				lista.add(cliente);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return lista;
	}
	
	//Atualizar somente se o id existir
	public void atualizar(Cliente cliente) {
	    String checarSql = "SELECT 1 FROM clientes WHERE id = ?";
	    
	    String atualizarSql = "UPDATE clientes SET nome = ?, email = ? WHERE id = ?";
	    
	    try (Connection conn = Conexao.getConnection();
	         PreparedStatement checarStmt = conn.prepareStatement(checarSql)) {
	        checarStmt.setInt(1, cliente.getId());

	        ResultSet rs = checarStmt.executeQuery();
	        
	        if (rs.next()) {
	            try (PreparedStatement atualizarStmt = conn.prepareStatement(atualizarSql)) {
	                atualizarStmt.setString(1, cliente.getNome());
	                atualizarStmt.setString(2, cliente.getEmail());
	                atualizarStmt.setInt(3, cliente.getId());

	                atualizarStmt.executeUpdate();

	                System.out.println("Cliente atualizado com sucesso!");
	            }
	        } else {
	            System.out.println("Cliente com ID " + cliente.getId() + " não encontrado.");
	        }

	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}

	
	public void deletar(int id) {
	    String delSql = "DELETE FROM clientes WHERE id = ?";
	    
	    //Verificar se o id existe antes de apagar
	    String checarSql = "SELECT 1 FROM clientes WHERE id = ?";
	    
	    try (Connection conn = Conexao.getConnection();
	         PreparedStatement checarStmt = conn.prepareStatement(checarSql)) {
	        
	        checarStmt.setInt(1, id);
	        ResultSet rs = checarStmt.executeQuery();

	        if (rs.next()) {
	            try (PreparedStatement delStmt = conn.prepareStatement(delSql)) {
	                delStmt.setInt(1, id);
	                delStmt.executeUpdate();
	                System.out.println("Cliente removido com sucesso.");
	            }
	        } else {
	            System.out.println("Cliente com ID " + id + " não encontrado.");
	        }
	        
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}

}
