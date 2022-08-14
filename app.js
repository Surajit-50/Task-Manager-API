const connectDB=require('./db/connect')
const express=require('express');
const app=express();
const tasks=require('./routes/tasks');

require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json());
const notFound=require('./middleware/not-found');
app.get('/hello',(req,res)=>{
    res.send('Welcome Professor');
})
app.use('/api/v1/tasks',tasks);

app.use(notFound);
const start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,(req,res)=>{
            console.log('Welcome professor');
        })
    } catch (error) {
        console.log(error);
    }
}
start()