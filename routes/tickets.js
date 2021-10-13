const express = require('express');
const { route } = require('.');
const router = express.Router();
const ticketsCtrl = require('../controller/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;