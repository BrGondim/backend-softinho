CREATE DATABASE SoftinhoDB;
GO

USE SoftinhoDB;
GO

CREATE TABLE Clients (
    id INT PRIMARY KEY IDENTITY(1,1),
    company_name VARCHAR(255) NOT NULL,
    document_type VARCHAR(50) CHECK (document_type IN ('CPF', 'CNPJ')) NOT NULL,
    document_number VARCHAR(20) NOT NULL UNIQUE,
    street VARCHAR(255),
    street_number VARCHAR(50),
    state_code CHAR(2),
    phone VARCHAR(20),
    email_cadastrado VARCHAR(255),
    renewal_contract DATETIME,
    contract_type VARCHAR(50) CHECK (contract_type IN ('Mensal', 'Trimestral', 'Semestral', 'Anual')) NOT NULL,
    price DECIMAL(10, 2)
);
GO

CREATE TABLE Tickets (
    id INT PRIMARY KEY IDENTITY(1,1),
    client_id INT,
    name VARCHAR(255),
    document_number VARCHAR(20),
    type_service_call VARCHAR(50),
    description TEXT,
    protocol VARCHAR(50) UNIQUE,
    opening_date DATETIME,
    closing_date DATETIME,
    status VARCHAR(50),
    priority VARCHAR(50),
    solution TEXT,
    FOREIGN KEY (client_id) REFERENCES Clients(id)
);
GO

INSERT INTO Clients (
    company_name, document_type, document_number, street, street_number, state_code, phone, email_cadastrado, renewal_contract, contract_type, price
) VALUES
('Farmacity', 'CPF', '06014255532', 'Av Paulista', '2309', 'SP', '(11) 9 9343-3409', 'contato@farmacity.com', '2024-12-31 12:00:00', 'Mensal', 5000),
('Copiadora Bell', 'CNPJ', '52462015000175', 'Av Paulista', '2309', 'SP', '(11) 9 9343-3409', 'contato@copiadorabell.com', '2024-12-31 12:00:00', 'Anual', 5000),
('Papelaria Max10', 'CPF', '12345678901', 'Av Paulista', '2309', 'SP', '(11) 9 9343-3409', 'contato@papelariamax10.com', '2024-12-31 12:00:00', 'Mensal', 5000),
('Café Aroma', 'CNPJ', '91430651000177', 'Av Paulista', '2309', 'SP', '(11) 9 9343-3409', 'contato@cafearoma.com', '2024-12-31 12:00:00', 'Semestral', 5000),
('Floricultura Primavera', 'CNPJ', '86122164000107', 'Av Paulista', '2309', 'SP', '(11) 9 9343-3409', 'contato@floriculturaprimavera.com', '2024-12-31 12:00:00', 'Anual', 5000),
('Livraria Becco', 'CPF', '45846031030', 'Av Paulista', '2309', 'SP', '(11) 9 9343-3409', 'contato@livrariabecco.com', '2024-12-31 12:00:00', 'Trimestral', 5000),
('Academia Vital', 'CNPJ', '04516473000105', 'Av Paulista', '2309', 'SP', '(11) 9 9343-3409', 'contato@academiavital.com', '2024-12-31 12:00:00', 'Mensal', 5000),
('Pereira & Cia', 'CPF', '98765432100', 'Rua da Paz', '789', 'RS', '(51) 9 8765-4321', 'contato@pereiraecia.com', '2024-11-15 09:00:00', 'Mensal', 500),
('Oliveira Engenharia', 'CNPJ', '07890123000110', 'Rua do Engenheiro', '345', 'SP', '(11) 9 2345-6789', 'contato@oliveiraengenharia.com', '2024-09-01 08:00:00', 'Semestral', 3000),
('Souza & Filhos', 'CPF', '45678912345', 'Rua dos Trabalhadores', '234', 'PR', '(41) 9 5678-1234', 'contato@souzaefilhos.com', '2024-08-01 10:00:00', 'Trimestral', 1800),
('Martins & Co', 'CNPJ', '08901234000111', 'Av das Nações', '567', 'RJ', '(21) 9 3456-7890', 'contato@martinseco.com', '2024-12-15 12:00:00', 'Anual', 5500);
GO
