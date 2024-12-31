import mongoose from "mongoose";

if(!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined')
}

const connectDB = async () => {
    try {

        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI as string);
            console.log('Connected to MongoDB')
        }
        
    } catch (error) {
        console.log(`Error while connecting to MongoDB: ${error}`)
    }
}

export default connectDB;