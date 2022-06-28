const express = require('express');
const router = express.Router({ mergeParams: true });
const { getNotes, createNote } = require('../controllers/noteController');

const { protectRoute } = require('../middleware/authMiddleware');

router.route('/').get(protectRoute, getNotes).post(protectRoute, createNote);

module.exports = router;
