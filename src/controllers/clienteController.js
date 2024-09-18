const clientModel = require('../models/clientModel');

const getClients = async (req, res) => {
    try {
        const clients = await clientModel.getAllClients();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os clientes', error });
    }
};

const getClient = async (req, res) => {
    try {
        const client = await clientModel.getClientById(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o cliente', error });
    }
};

const createClient = async (req, res) => {
    try {
        const newClient = await clientModel.createClient(req.body);
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o cliente', error });
    }
};

module.exports = {
    getClients,
    getClient,
    createClient
};
