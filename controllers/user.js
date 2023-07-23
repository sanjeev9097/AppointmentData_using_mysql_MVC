
const connection = require('../config/db');

const getDetails = (req, res) => {
    res.redirect("/index.html");
}

const postDetails = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    try{
        connection.query("INSERT INTO user(name, phone, email) values(?, ?, ?)",[name, phone, email], (err, rows) => {
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/data');
            }
        })
    }
    catch (err) {
        console.log(err);
    }
};

const showData = (req, res) => {
    connection.query("SELECT * FROM user", (err, rows) => {
        if(err){
            console.log(err);
        }
        else{
            res.render('read.ejs',{rows});
        }
    })
};

const deleteData = (req, res) => {
    connection.query("delete from user where id=?",[req.query.id], (err, rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/data');
        }
    })
};

module.exports = {getDetails, postDetails, showData, deleteData};