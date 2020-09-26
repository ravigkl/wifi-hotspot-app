const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type:  Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String, 
    createdOn: {
        type: Date,
        'default': Date.now
    }
});

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true},
    address: String,
    rating: {type: Number, 'default': 0, min: 0, max: 5},
    facilities: [String],
    coords: {
        type: {type: String},
        coordinates: [Number]
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema, 'Locations');

//mlab connection

//mongo ds057224.mlab.com:57224/mangodb -u rs-mango -p Welcome!901



locationSchema.index({coords: '2dsphere'});



db.Locations.save({
    name: 'Starcups',
    address: '125 High Street, Reading, RG6 1PS', rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'], coords: [-0.9690884, 51.455041],
    openingTimes: [{
    days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false
    }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      }, {
        days: 'Sunday',
        closed: true
    }] })

db.Locations.update({ name: 'Starcups'
}, { $push: {
reviews: {
author: 'Simon Holmes',
_id: ObjectId(),
rating: 5,
timestamp: new Date("Mar 12, 2017"), reviewText: "What a great place."
} }
})