const router = require('express').Router();
const Income = require('../models/Income');
const auth = require('../middleware/auth');

// @route   POST api/income
// @desc    Add new income
router.post('/', auth, async (req, res) => {
    const { source, amount, date, icon } = req.body;
    try {
        const newIncome = new Income({ user: req.user.id, source, amount, date, icon });
        const income = await newIncome.save();
        res.json(income);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/income
// @desc    Get all incomes for a user
router.get('/', auth, async (req, res) => {
    try {
        const incomes = await Income.find({ user: req.user.id }).sort({ date: -1 });
        res.json(incomes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/income/:id
// @desc    Update an income
router.put('/:id', auth, async (req, res) => {
    const { source, amount, date, icon } = req.body;
    try {
        let income = await Income.findById(req.params.id);
        if (!income) return res.status(404).json({ msg: 'Income not found' });
        if (income.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        income = await Income.findByIdAndUpdate(req.params.id, { $set: { source, amount, date, icon } }, { new: true });
        res.json(income);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/income/:id
// @desc    Delete an income
router.delete('/:id', auth, async (req, res) => {
    try {
        let income = await Income.findById(req.params.id);
        if (!income) return res.status(404).json({ msg: 'Income not found' });
        if (income.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        await Income.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Income removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
