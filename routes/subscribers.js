const express = require('express')
const router = express.Router()
    // add new subscriber model
const Subscriber = require('../models/subscriber')

// getall
router.get('/', async(req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



// getone
router.get('/:id', (req, res) => {
    res.send(req.params.id)

})

// create one
router.post('/', (req, res) => {

})

// updateone - PUT vs PATCH - see difference
// PUT updates all info - PATCH -update fields that changed only e.g. update contact number
router.patch('/:id', (req, res) => {

})

// deleteone
router.delete('/:id', (req, res) => {

})











module.exports = router