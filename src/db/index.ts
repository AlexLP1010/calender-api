import mysql from 'mysql2/promise'

const acces: mysql.PoolOptions = {
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? 'root',
  database: process.env.DB_NAME ?? 'calender',
  port: Number(process.env.DB_PORT) ?? 3306
}

export const connectionPool = mysql.createPool(acces)
