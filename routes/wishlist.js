const express = require('express');

const wishlistRouter = express.Router();

const {Wishlist, Person, Event, Item} = require('../models')

wishlistRouter.get('/:email', async (req,res)=>{
    const person = await Person.findOne({
        where: {
            email: req.params.email
        },
        include: [Wishlist]
    })
    res.json({person})
})
 
module.exports = {
    wishlistRouter
}