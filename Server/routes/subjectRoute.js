const Branch = require('../models/Branch');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const branch = await Branch.find();
    return res.json(branch);
})

router.post('/', async (req, res) => {
    const branch = await new Branch(req.body);
    branch.save();
    return res.json("register successfully");
})

router.delete('/:id', async (req, res) => {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    return res.json("Deleted Successfully");
})

router.put('/:id', async (req, res) => {
    const branch = await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(branch);
})

module.exports = router;