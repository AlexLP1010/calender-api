import mysql from 'mysql2/promise'
import { config } from '../config'

const acces: mysql.PoolOptions = {
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port
}

export const connectionPool = mysql.createPool(acces)

export async function setUpDatabase() {
  const connection = await mysql.createConnection(acces)
  const dropResult = await connection.execute<mysql.ResultSetHeader[]>('DROP TABLE IF EXISTS entries;')
  console.log(dropResult);  
  const createResult = await connection.execute<mysql.ResultSetHeader[]>(`CREATE TABLE IF NOT EXISTS entries(
    id INTEGER NOT NULL PRIMARY KEY auto_increment,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL
  ) ENGINE=InnoDB;`)
  console.log(createResult); 
}