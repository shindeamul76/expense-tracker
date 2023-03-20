

const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: [true, 'Email already exits'],
    },

    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'password must be at least 6 characters'],
        select: false,
    },
    incomes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Income",
        }
    ], 
    expenses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Expense",
        }
    ], 
})

// UserSchema.pre('save', async function (next) {
//     if (this.isModified('password')){
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// })

// UserSchema.methods.matchPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// }

// UserSchema.methods.generateToken = function () {
//     return jwt.sign({_id:this._id}, process.env.JWT_SECRET)
// }


module.exports = mongoose.model('User', UserSchema)