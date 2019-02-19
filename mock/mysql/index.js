var mysql = require('mysql');
//建立连接关系配置
var config = {
    host: "127.0.0.1",
    user: 'root',
    password: '1q2w3e',
    database: 'login',
    port: 3306
};


let connection = mysql.createPool(config)
module.exports = (sql) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connect) => {
            connect.query(sql, (sqlerr, rows, fields) => {
                if (err) {
                    reject(err)
                    return
                } else {
                   
                        resolve(rows)
                    
                }

                //释放连接
                connect.release()
            })
        })
    })
}
