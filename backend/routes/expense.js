const router = require('express').Router();
const Expense = require('../models/Expense');
const auth = require('../middleware/auth');

// @route   POST api/expense
// @desc    Add new expense
// @access  Private
router.post('/', auth, async (req, res) => {
    const { name, amount, date, icon } = req.body;
    try {
        const newExpense = new Expense({
            user: req.user.id,
            name,
            amount,
            date,
            icon
        });

        const expense = await newExpense.save();
        res.json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/expense
// @desc    Get all expenses for a user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/expense/:id
// @desc    Update an expense
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { name, amount, date, icon } = req.body;

    // Build expense object
    const expenseFields = {};
    if (name) expenseFields.name = name;
    if (amount) expenseFields.amount = amount;
    if (date) expenseFields.date = date;
    if (icon) expenseFields.icon = icon;

    try {
        let expense = await Expense.findById(req.params.id);

        if (!expense) return res.status(404).json({ msg: 'Expense not found' });

        // Make sure user owns the expense
        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        expense = await Expense.findByIdAndUpdate(
            req.params.id,
            { $set: expenseFields },
            { new: true }
        );

        res.json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/expense/:id
// @desc    Delete an expense
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let expense = await Expense.findById(req.params.id);

        if (!expense) return res.status(404).json({ msg: 'Expense not found' });

        // Make sure user owns the expense
        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Expense.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Expense removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
