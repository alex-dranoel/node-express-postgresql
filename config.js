require('dotenv').config()

const {Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
console.log(process.env.DB_USER);
//const connectionString = 'postgres://gbwgmchxgcntlk:3da53a1a91c851023ccef878112227244dbcb10d156b26c22f8fb55a752f473b@ec2-3-233-236-188.compute-1.amazonaws.com:5432/dc5uaskpuqqpoe'
console.log('Is production ? ' + isProduction);
console.log('connection string: ' + connectionString);
const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

module.exports = {pool}