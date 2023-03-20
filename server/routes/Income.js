const router = require('express').Router();

const { addIncome, getIncome, deleteIncome } = require('../controllers/Income')

const { isAuthenticated } = require("./auth");

router.post('/add-income', addIncome);

router.get('/get-incomes',  getIncome);

router.delete('/delete-income/:id', deleteIncome);


module.exports = router