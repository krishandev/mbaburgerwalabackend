import app from "./app.js";
import { connectDB } from "./config/database.js";
import Razorpay from "razorpay";


const port=process.env.PORT || 4000;

connectDB();

export const instance = new Razorpay({ key_id: process.env.RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_SECRET })


app.get('/', (req, res, next)=>{
    res.send("<h1>Working</h1>")
})

app.listen(port, ()=>console.log(`Server is working on Port: ${port}, in ${process.env.NODE_ENV} mode`) 
);