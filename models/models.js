const con = require("../config/database");

class employees{
    static get(){
        return new Promise((resolve, reject)=>{
            const sql = "select * from employees";
            con.query(sql, (err, result)=>{
                if (err){
                   return reject(err);
                }
                resolve(result);
            });
        });
    };

    static getById(employee_id){
        return new Promise((resolve, reject)=>{
            const sql = "select * from employees where employee_id = ?";
            con.query(sql,[employee_id], (err,result)=>{
                if(err){
                    return reject(err);
                };
                resolve(result);
            });
        });
    };

    static create(first_name,last_name,hourly_pay){
        return new Promise((resolve, reject)=>{
            const sql = "insert into employees(first_name,last_name,hourly_pay)values(?,?,?)";
            con.query(sql,[first_name,last_name,hourly_pay], (err,result)=>{
                if(err){
                    return reject(err);
                };
                resolve({first_name, last_name, hourly_pay});
            });
        });
    };

    static updateById(first_name,last_name,hourly_pay,employee_id){
        return new Promise((resolve, reject)=>{
            const sql = "update employees set first_name=?, last_name=?, hourly_pay=? where employee_id=?";
            con.query(sql,[first_name,last_name,hourly_pay,employee_id], (err, result)=>{
                if(err){
                    reject(err);
                };
                resolve({first_name, last_name, hourly_pay});
            });
        });
    };

    static deleteById(employee_id){
        return new Promise((resolve, reject)=>{
            const sql = "delete from employees where employee_id=?";
            con.query(sql,[employee_id], (err, result)=>{
                if(err){
                    reject(err);
                };
                resolve(result);
            });
        });
    };
};

module.exports = employees;