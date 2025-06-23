const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    }
    catch(error)
    {
        console.error("erreur lors de la connection a moongoDB " , error)
        throw error;
    }
}

module.exports = connectDB