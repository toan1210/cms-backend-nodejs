const mongoose = require('mongoose');
async function connect()
{
    try {
        await mongoose.connect('mongodb+srv://admin:admin123@cluster0.gtenp.mongodb.net/news?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Kết Nối Thành Công");
    } catch (error) {
        console.log("Kết Nối Thất Bại");   
    }
}
module.exports = { connect }