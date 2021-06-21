package Conexoes;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConexaoBanco {

    public static JdbcTemplate jdbcTemplate;
    public static BasicDataSource dataSource;

    public static String DRIVER = "com.mysql.cj.jdbc.Driver";
    public static String URL = "jdbc:mysql://localhost:3306/moove?useTimezone=true&serverTimezone=UTC";
    public static String USERNAME = "Moove";
    public static String PASSWORD = "Moove123";

    public ConexaoBanco() {
        Conectar();
    };
    
    public ConexaoBanco(String driver, String url, String username, String password) {
        this.DRIVER = driver;
        this.URL = url;
        this.USERNAME = username;
        this.PASSWORD = password;
    }
    
    

    public void Conectar(){
        dataSource = new BasicDataSource();
        dataSource.setDriverClassName(DRIVER);
        dataSource.setUrl(URL);
        dataSource.setUsername(USERNAME);
        dataSource.setPassword(PASSWORD);

        jdbcTemplate = new JdbcTemplate(dataSource);
    }
}
