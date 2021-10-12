const Ticket = require('../models/ticket');
const Flight = require('../models/flights');

module.exports = {
    new: newTicket,
    create,
}

function create(req, res) {
    Ticket.create(req.body, function(err, ticket){
        res.redirect('tickets/new');
    })
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
    res.render('tickets/new', {
        title: 'New Ticket', 
        tickets,
    });
    })
}
