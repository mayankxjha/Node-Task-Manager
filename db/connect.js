const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
// const connectionString = "mongodb+srv://rai:altairgotdrip47@nodeexpressprojects.upg8msz.mongodb.net/TaskManager?retryWrites=true&w=majority"


const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB