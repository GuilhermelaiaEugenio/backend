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

    async deleteExercicios(req, res) {
        try {
            const { codexer } = req.params;

            const exercicio = await knex('exercicios')
                .where({ codexer })
                .first();

            if (!exercicio) {
                return res.status(404).json({ error: 'Exercício não encontrado' });
            }

            await knex('exercicios')
                .where({ codexer })
                .delete();

            return res.status(200).json({ message: 'Exercício excluído com sucesso' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async updateExercicios(req, res) {
        try {
            const { codexer } = req.params;
            const { nome, dias, descr, codcli } = req.body;

            const exercicio = await knex('exercicios')
                .where({ codexer })
                .first();

            if (!exercicio) {
                return res.status(404).json({ error: 'Exercício não encontrado' });
            }

            await knex('exercicios')
                .where({ codexer })
                .update({ 
                    nome: nome || exercicio.nome,
                    dias: dias || exercicio.dias,
                    descr: descr || exercicio.descr,
                    codcli: codcli || exercicio.codcli
                });

            const exercicioAtualizado = await knex('exercicios')
                .where({ codexer })
                .first();

            return res.status(200).json(exercicioAtualizado);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}