const cepPromise = require('cep-promise')

class GetCep
{   
    async gepCep(req,res)
    {   
        const cep = await cepPromise(req.params.numCep)
        return res.json(cep)
    }
}

module.exports = new GetCep
