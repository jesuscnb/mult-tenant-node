const validar = require("../rules/user.rules");
const tenatUtils = require('../utils/tenantUtils');
const connection = require('../repository/Connection');
const {schema, schemaName} = require('../models/user.model');

exports.create = async (req, res) => {

    const tentant = await tenatUtils.getTenant(req.headers);
    const validacao = await validar.validar(req.body);

    if (!validacao.valido) {
        res.status(400).send({
            status: 400,
            messagem: validacao.erros
        });
        return;
    }

    try {
        const model = await connection.getModelByTenant(tentant, schemaName, schema)
        await model.create(req.body);
        console.log('Sucesso!');
        res.status(200).send(res.body);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }


};


exports.findAll = async (req, res) => {
    try {

        // Carrega a Tenant do Header
        const tentant = await tenatUtils.getTenant(req.headers);

        // seleciona a base enviada
        const model = await connection.getModelByTenant(tentant, schemaName, schema)

        //Executa o comando
        const data = await model.find();

        res.status(200).send(data);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }

};


exports.findById = async (req, res) => {
    try {
        // pega o parametro da uri
        const id = req.params.id;

        // Carrega a Tenant do Header
        const tentant = await tenatUtils.getTenant(req.headers);

        // seleciona a base enviada
        const model = await connection.getModelByTenant(tentant, schemaName, schema)

        //Executa o comando
        const data = await model.findById(id);

        res.status(200).send(data);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }

};

exports.delete = async (req, res) => {
    try {
        // pega o parametro da uri
        const id = req.params.id;

        // Carrega a Tenant do Header
        const tentant = await tenatUtils.getTenant(req.headers);

        // seleciona a base enviada
        const model = await connection.getModelByTenant(tentant, schemaName, schema)

        //Executa o comando
        const data = await model.deleteOne({_id: id});

        res.status(200).send(data);

    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }

};













