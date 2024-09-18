const { sql } = require('../config/dbConfig');

const getAllClients = async () => {
    const request = new sql.Request();
    const result = await request.query('SELECT * FROM Clients');
    return result.recordset;
};

const getClientById = async (id) => {
    const request = new sql.Request();
    const result = await request.query(`SELECT * FROM Clients WHERE id = ${id}`);
    return result.recordset[0];
};

const createClient = async (client) => {
    const request = new sql.Request();
    const query = `INSERT INTO Clients (company_name, document_type, document_number, street, street_number, state_code, phone, email_cadastrado, renewal_contract, contract_type, price) 
                   VALUES ('${client.company_name}', '${client.document_type}', '${client.document_number}', '${client.street}', '${client.street_number}', '${client.state_code}', '${client.phone}', '${client.email_cadastrado}', '${client.renewal_contract}', '${client.contract_type}', ${client.price})`;
    const result = await request.query(query);
    return result;
};

module.exports = {
    getAllClients,
    getClientById,
    createClient
};
