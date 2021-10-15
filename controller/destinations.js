const Flight = require('../models/flights');

module.exports = {
    create,
   
}

function create(req, res) {
    Flight.findById(req.params.id,function(err, flightDoc) {
        flightDoc.destinations.push(req.body);
        flightDoc.save(function(err) {
            console.log(err);
            res.redirect(`/flights/${flightDoc._id}`);
        });
    });
}
