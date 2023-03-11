
const Income = require('../models/Income')

exports.addIncome = async (req, res) => {
    try {
        const { title, amount, category, description, date} = req.body;

        const income = Income({
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

        await income.save();
        res.status(200).json({
            message:"Income Added"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getIncome = async (req, res) => {
    try {

        const income = await Income.find().sort({createdAt: -1})
        res.status(200).json({
            income
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteIncome = async (req, res) => {
    try {

        const { id } = req.params;

        const income = await Income.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Income deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}