import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        console.log("mongo uri :", process.env.MONGO_URI)
        const dataBaseConnect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${dataBaseConnect.connection.host}`)
    } catch (error) {
        console.log('Error connecting to database', error.message)
        process.exit(1)
 
    }
}

