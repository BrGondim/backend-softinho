const { sql } = require('../config/dbConfig');

const getAllTickets = async () => {
    const request = new sql.Request();
    const result = await request.query('SELECT * FROM Tickets');
    return result.recordset;
};

const getTicketById = async (id) => {
    const request = new sql.Request();
    const result = await request.query(`SELECT * FROM Tickets WHERE id = ${id}`);
    return result.recordset[0];
};

const createTicket = async (ticket) => {
    const request = new sql.Request();
    const query = `INSERT INTO Tickets (name, document_number, type_service_call, description, protocol, opening_date, closing_date, status, priority, solution) 
                   VALUES ('${ticket.name}', '${ticket.document_number}', '${ticket.type_service_call}', '${ticket.description}', '${ticket.protocol}', '${ticket.opening_date}', '${ticket.closing_date}', '${ticket.status}', '${ticket.priority}', '${ticket.solution}')`;
    const result = await request.query(query);
    return result;
};

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket
};
