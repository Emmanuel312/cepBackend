const cepPromise = require('cep-promise')

class GetCep
{   
    async gepCep(req,res)
    {   
        try
        {
            const cep = await cepPromise(req.params.numCep)
            return res.json(cep)
        }
        catch(err)
        {
            return res.json(err)
        }
        
    }
}

module.exports = new GetCep
