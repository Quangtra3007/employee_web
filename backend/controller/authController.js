import User from "../model/User";
const bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';
const login = async(req, res)=> {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({success:false,error: "User not found"});
        }
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(404).json({success:false,error: "Wrong password"});
        }
        const =token = JsonW
    } catch (error) {
        res.status(500).json({success:false,error: "Internal server error"});
    }
}
export {login};