const { client } = require('../../db/queries')
module.exports = {
    dropTable: (req, res) => {
        client.query("DROP TABLE users");
    },
    createTable: () => {

        client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id serial PRIMARY KEY,
                username varchar(80),
                email varchar(80),
                password varchar(100)
            )
        `, (err, v) => {
            if (err) console.error("Error of create table is", err)
        })
    },

    getAllUsers: (req, res) => {
        client.query("SELECT * FROM users", (err, results) => {
            if (err) return res.status(400).send(err);
            else {
                res.send(results.rows);
            }
        })
    },
    getUserbyName: (req, res) => {
        let n = req.params.username;
        console.log(n)
        client.query(`
            SELECT * FROM users WHERE username=$1 
        `, [n], (err, results) => {
            if (err) res.status(400).send(err);
            else {
                res.send(results.rows);
            }
        })
    },
    deleteUserbyID: (req, res) => {
        console.log(req.body)
        if (!req.body.id) return res.status(400).send("ID should not be null")
        client.query(`
            DELETE FROM users where id=$1 
        `, [req.body.id], (err, result) => {

            if (err || result.rowCount == 0) res.status(400).send(err || "Not exists")
            else res.send(`User with ID=${req.body.id} has been deleted`);
        })
    },
    postUser: (req, res) => {
        client.query("INSERT INTO users (username,password,email) VALUES($1,$2,$3)", [req.body.username, req.body.password, req.body.email], (err, results) => {
            console.log(req.body)
            if (err) res.status(400).send(err);
            else res.send(results.rowCount > 0 ? "Added Record" : "Record not added");
        })
    }
}