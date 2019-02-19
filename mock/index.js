const url = require('url')
const query = require("./mysql/index.js")
const md5 = require('md5')
module.exports = function (app) {
    app.get("/login", (req, res) => {
        const parsename = url.parse(req.url, true);
        const { username, password } = parsename.query;

        //判断密码账号是否正确
        let sql = 'select * from user where username= "' + username + '" and passwodr="' + password + '"'
        query(sql).then(result => {
            if (result != undefined && result.length > 0) {
                const setToken = JSON.stringify({
                    username,
                    data: result[0]
                })
                let Token = md5(setToken)

                //向数据库添加Token
                query('UPDATE user set token="' + Token + '" where username= "' + username + '"').then(reus => {
                    console.log(reus)
                    if (Object.prototype.toString.call(reus) == "[object Object]") {
                        res.send({
                            code: 0,
                            data: result[0],
                            Token
                        })
                    }
                })
            } else {
                res.send({
                    code: 2,
                    result
                })
            }

        })

    })

    app.get("/register", (req, res) => {
        const parsename = url.parse(req.url, true);
        const { username, password } = parsename.query;
        let sql = 'select * from login.user where username="' + username + '"'
        query(sql).then(result => {
            if (result != undefined && result.length > 0) {
                res.send({
                    code: 0,
                    result
                })
            } else {
                query('INSERT INTO login.user (username, passwodr) VALUES ("' + username + '", "' + password + '")').then(reus => {
                    if (Object.prototype.toString.call(reus) == "[object Object]") {
                        res.send({
                            code: 1
                        })
                    } else {
                        res.send({
                            code: 2
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })


            }

        }).catch(err => {
            res.send({
                code: 1,
                err
            })
        })
    })
}