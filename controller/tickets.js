const Ticket = require('../models/ticket');
const Flight = require('../models/flights');

module.exports = {
    new: newTicket,
    create,
}

function create(req, res) {
    let ticket = new Ticket(req.body);
    ticket.flight = req.params.id;
    ticket.save(function(err){
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight ){
        res.render('tickets/new', {flight}) 
    });
}
