const express = require('express');
const router = express.Router();
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
} = require('../controllers/ticketController');

const { protectRoute } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(protectRoute, getTickets)
  .post(protectRoute, createTicket);

router
  .route('/:id')
  .get(protectRoute, getTicket)
  .delete(protectRoute, deleteTicket);

module.exports = router;
