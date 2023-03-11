
const Expense = require('../models/Expense')

exports.addExpense = async (req, res) => {
    try {
        const { title, amount, category, description, date} = req.body;

        const expense = Expense({
            title,
            amount,
            category,
            description,
            date,
        })

        if ( !title || !amount || !category || !description || !date) {
            return res.status(400).json({
                message:"All the fields are required!"
            })
        }

        if( amount <= 0 || !amount === 'number') {
            return res.status(400).json({
                message: "Amount must be a Positive"
            })
        }

        await expense.save();
        res.status(200).json({
            message:"Expense Added"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getExpense = async (req, res) => {
    try {

        const expense = await Expense.find().sort({createdAt: -1})
        res.status(200).json({
            expense
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteExpense = async (req, res) => {
    try {

        const { id } = req.params;

        const expense = await Expense.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "expense deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}