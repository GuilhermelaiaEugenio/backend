const knex = require('./../database');

module.exports={
    async searchVideos(req, res){
        try {
            const result = await knex('videos');
            return res.status(200).send(result);
            
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

}