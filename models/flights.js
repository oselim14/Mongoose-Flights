const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  },
  arrival: Date, 
})	

const flightSchema = new Schema({
  airline: String,
  airport: {
      type: String,
      default: 'DEN',
    },
  flightNo:{
      type: Number,
      required: true,
    },
  departs: { 
      type: Date,
      default: new Date().setFullYear(new Date().getFullYear()+1),
    },
  destinations: [destinationSchema],
});



module.exports = mongoose.model('Flight', flightSchema);