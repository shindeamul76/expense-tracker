
const Income = require('../models/Income')
// const User = require('../models/User')

exports.addIncome = async (req, res) => {
    try {
        const { title, amount, category, description, date} = req.body;

        const income = Income({
            title,
            amount,
            category,
            description,
            date,
            // owner: req.user._id,
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
        // const income = await Income.create(incomeData);

        // const user = await User.findById(req.user._id);
  
        // user.incomes.unshift(income._id);
  

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

        // const user = await User.findById(req.user._id)

        // const income = user.incomes;


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

        // const { id } = req.params;

        // const income = await Income.findById(id);


        // if (!income) {
        //     return res.status(404).json({
        //       success: false,
        //       message: "Income not found",
        //     });
        //   }

        //   if (income.owner.toString() !== req.user._id.toString()) {
        //     return res.status(401).json({
        //       success: false,
        //       message: "Unauthorized",
        //     });
        //   }

        //   await  Income.deleteOne({ _id: id });

        //   const user = await User.findById(req.user._id);

        //   const index = user.incomes.indexOf(req.params.id);
        //   user.incomes.splice(index, 1);

        //   await user.save();

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