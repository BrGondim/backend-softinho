const ticketModel = require('../models/ticketModel');

const getTickets = async (req, res) => {
    try {
        const tickets = await ticketModel.getAllTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os tickets', error });
    }
};

const getTicket = async (req, res) => {
    try {
        const ticket = await ticketModel.getTicketById(req.params.id);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o ticket', error });
    }
};

const createTicket = async (req, res) => {
    try {
        const newTicket = await ticketModel.createTicket(req.body);
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o ticket', error });
    }
};

module.exports = {
    getTickets,
    getTicket,
    createTicket
};
