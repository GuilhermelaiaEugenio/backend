const knex = require('./../database');
const jwt =require('jsonwebtoken');

module.exports = {
    async create(req, res){
        try {
            const { nome } = req.body;
            const { dias } = req.body;
            const { descr } = req.body;
            const { codcli } = req.body;
            
            await knex('exercicios')
                .insert({ nome, dias, descr, codcli });
                return res.status(201).send( { nome, dias, descr, codcli });
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async searchExercicios(req, res){
        try {
            const result = await knex('exercicios');
            return res.status(200).send(result);
            
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
}