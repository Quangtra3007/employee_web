import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSEDB_URL);
        console.log(`${process.env.MONGOOSEDB_URL} is running`);
    }catch(error){
        console.log(error);
    }

};
export default connectDB