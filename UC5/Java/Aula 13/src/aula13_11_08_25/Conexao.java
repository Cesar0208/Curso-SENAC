package aula13_11_08_25;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {
	private static final String URL = "jdbc:mysql://localhost:3307/sistema_clientes";
	//jdbc:mysql://localhost:3307/?user=root
		
	private static final String USER = "root";
	private static final String PASSWORD = "senac";
	
	public static Connection getConnection() {
		try {
			return DriverManager.getConnection(URL, USER, PASSWORD);
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}
}
