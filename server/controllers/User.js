const User = require('../models/User');



exports.Register = async (req, res) => {

    try {
        
        const {name, email, password} = req.body;

        let user = await User.findOne({email});


        if (user) {
            return res
            .status(400)
            .json({
                success: false,
                massage: 'User already exits',
            })
        }


        user = await User.create({ 
            name , 
            email, 
            password, 
        });

      

        res.status(201).json({
            success: true,
            user,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage,

        })
    }
}


exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email}).select('+password');

        if (!user) {
            return res.status(400). json({
                success: false,
                massage: "User does not exits"
            });
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                massage: "Incorrect Password"
            })
        }

        const token = await user.generateToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }

        res.status(200).cookie("token", token, options).json({
            success: true,
            user,
            token,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage,
        })
    }
}

exports.logOut = async (req, res) => {
    try {
        
        res.status(200)
        .cookie("token", null, {expires: new Date(Date.now()), httpOnly: true})
        .json({
            success: true,
            massage: "Logged Out",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage,
        })
    }
}

