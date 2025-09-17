import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role: {type: String, enum: ["admin", "emplyee"], required: true},
    profieImage: {type: String},
    createAt: {type: Date, default: Date.now},
});
const User = mongoose.model('User', userSchema);
export default User;    