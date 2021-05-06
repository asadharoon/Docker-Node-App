const Pool = require('pg').Pool
const pool = new Pool({
    user: 'asadharoon',
    host: 'localhost',
    database: 'test',
    password: 'asad',
    port: 5433,
});
pool.connect().then(() => {
    console.warn("client connected")
}).catch(e => {
    console.log("catch e", e)
})
module.exports = {
    client: pool
}