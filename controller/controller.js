const model = require("../models/models.js");

exports.get = async (req,res)=>{
    try {
        const getAll = await model.get();
        res.json(getAll);    
    } 
    catch (err) {
        res.status(404).json({error: err.message});
    };
};

exports.getById = async (req,res)=>{
    const {employee_id} = req.params;
    try {
        const byId = await model.getById(employee_id);
        res.json(byId);
    } catch (err) {
        res.status(404).json({error: err.message});
    };
};

exports.create = async (req,res)=>{
    const {first_name, last_name, hourly_pay} = req.body;
    try {
        const newEmp = await model.create(first_name, last_name, hourly_pay);
        res.json(newEmp);
    } catch (err) {
        res.status(404).json({error: err.message});
    };
};

exports.updateById = async (req,res)=>{
    const {employee_id} = req.params;
    const {first_name,last_name,hourly_pay} = req.body;
    try {
        const id = await model.updateById(first_name,last_name,hourly_pay,employee_id);
        res.json(id);
    } catch (err) {
        res.status(404).json({error: err.message});
    };
};

exports.deleteById = async (req,res)=>{
    const {employee_id} = req.params;
    try {
        const del = await model.deleteById(employee_id);
        res.json(del);
    } catch (err) {
        res.status(404).json({error: err.message});
    };
};
