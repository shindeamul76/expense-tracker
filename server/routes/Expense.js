const router = require('express').Router();

const { addExpense, getExpense, deleteExpense } = require('../controllers/Expense')

const { isAuthenticated } = require("./auth");

router.post('/add-expense', addExpense);

router.get('/get-expenses',getExpense);

router.delete('/delete-expense/:id', deleteExpense);


module.exports = router