const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getTickets);
router.get('/:id', ticketController.getTicket);
router.post('/', ticketController.createTicket);

module.exports = router;
