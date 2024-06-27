import mongoose from "mongoose";

const connectDb = async(DATABASE_URL)=>{
    const DB_OPTIONS = {
        dbName : "products"
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("MongoDB Connected");

}

export default connectDb;