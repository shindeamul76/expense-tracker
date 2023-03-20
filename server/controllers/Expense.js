
const Expense = require('../models/Expense')
// const User = require('../models/User')

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

        // const expense = await Expense.create(expenseData)


        // const user = await User.findById(req.user._id);
  
        // user.expenses.unshift(expense._id);
  

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

        //  const user = await User.findById(req.user._id)

        //  const expense = user.expenses;

        const expense = await Expense.find().sort({createdAt: -1})

        res.status(200).json({
            expense,
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

        // const { id } = req.params;

        // const expense = await Expense.findById(id);

        // if (!expense) {
        //     return res.status(404).json({
        //       success: false,
        //       message: "Expense not found",
        //     });
        //   }

        //   if (expense.owner.toString() !== req.user._id.toString()) {
        //     return res.status(401).json({
        //       success: false,
        //       message: "Unauthorized",
        //     });
        //   }


        //   await  Expense.deleteOne({ _id: id });['po5ui]

        //   const user = await User.findById(req.user._id);

        //   const index = user.expenses.indexOf(req.params.id);
        //   user.expenses.splice(index, 1);

        //   await user.save();


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