import mysql from 'mysql2'
import 'dotenv/config.js' // 載入 .env

// const connection = mysql.createConnection({
//   host: 'igotbrew-mysql-we25317735-e743.e.aivencloud.com',
//   port: 14329,
//   user: 'avnadmin',
//   password: 'AVNS_QhJoFswFimuN6CxlyIe',
//   database: 'defaultdb',
// })

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

export default connection
