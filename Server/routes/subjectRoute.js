const Subject = require('../models/Subject');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const subject = await Subject.find();
    return res.json(subject);
})

router.post('/', async (req, res) => {
    const subject = await new Subject(req.body);
    subject.save();
    return res.json("register successfully");
})

router.delete('/:id', async (req, res) => {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    return res.json("Deleted Successfully");
})

router.put('/:id', async (req, res) => {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(subject);
})

module.exports = router;