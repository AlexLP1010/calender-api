import mysql from 'mysql2/promise'
import { config } from '../config'

const acces: mysql.PoolOptions = {
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port
}

export const connectionPool = mysql.createPool(acces)
