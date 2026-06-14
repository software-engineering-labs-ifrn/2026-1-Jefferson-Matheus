import dotenv from 'dotenv';
dotenv.config({path: '../.env'});
import mysql from 'mysql';

class Conexao {
    private static instancia: Conexao;
    private conexaoMysql: mysql.Connection;
    
    private constructor() {
        this.conexaoMysql = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: Number(process.env.DB_PORT),
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD
        });
    }

    public static getInstancia(): Conexao {
        if (!Conexao.instancia) {
            Conexao.instancia = new Conexao();
        }
        return Conexao.instancia;
    }
}

export default Conexao;