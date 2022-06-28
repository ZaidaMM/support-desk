const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Note = require('../models/noteModel');
const Ticket = require('../models/ticketModel');

// description: Get ticket notes
// route: GET /api/tickets/:ticketId/notes
// access: Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using id in token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const ticket = await Ticket.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorised');
  }

  const notes = await Note.find({ ticket: req.params.ticketId });

  res.status(200).json(notes);
});
// description: Create note
// route: GET /api/tickets/:ticketId/notes
// access: Private
const createNote = asyncHandler(async (req, res) => {
  // Get user using id in token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const ticket = await Ticket.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorised');
  }

  const note = await Note.create({
    text: req.body.text,
    isStaff: false,
    user: req.user.id,
    ticket: req.params.ticketId,
  });

  res.status(200).json(note);
});

module.exports = { getNotes, createNote };
