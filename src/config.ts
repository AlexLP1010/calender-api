if(process.env.NODE_ENV !== 'production') {
   require('dotenv').config()
}

export const config = {
  port: process.env.PORT,
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
  }
}