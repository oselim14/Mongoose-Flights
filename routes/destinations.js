const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controller/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;