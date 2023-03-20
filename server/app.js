const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./database/connect')
const cookieParser = require('cookie-parser')

// middlewears
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(cors());

//routers
const incomeRouter = require('./routes/Income');
const expenseRouter = require('./routes/Expense');
const userInfo = require('./routes/User')

app.use('/api/v1', incomeRouter);
app.use('/api/v1', expenseRouter);
app.use('/api/v1', userInfo);

app.get('/', (req, res) => {
    res.send("Hello World")
})

// connection of database and server
const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, ()=> console.log(`server is running on port ${process.env.PORT}...`))
        
    } catch (error) {
        console.log(error)
    }
}

start();
