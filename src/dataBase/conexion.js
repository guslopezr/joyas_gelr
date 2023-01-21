const { Pool } = require('pg')
    //require('dotenv').config()

const credentials = {
    host: 'postgresql-guslopezr.alwaysdata.net',
    user: 'guslopezr',
    password: 'Gus@0920',
    database: 'guslopezr_joyas',
    port: '5432',
    allowExitOnIdle: true
}



const pool = new Pool(credentials)

module.exports = pool