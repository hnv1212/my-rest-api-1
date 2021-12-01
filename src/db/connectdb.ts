import mongoose from 'mongoose'

async function connectDB() {
    const DB_URL = process.env.MONGO_URL
    try {
        await mongoose.connect(DB_URL as string)
        console.log("Connected to DB!")
    } catch (e) {
        console.error(`Connect to DB Error: ${e}`)
    }
}

export default connectDB