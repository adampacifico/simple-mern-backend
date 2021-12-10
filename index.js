import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import personRoutes from './routes/routes.js'
import bodyParser from 'body-parser';

const app = express()

app.use(cors())
// app.use(express.json())
app.use(bodyParser.json({limit: '50mb'}));
// app.use(express.limit(100000000));
// app.listen(3001, () => {
//     console.log('HEYYYYYYYYYYYY')
// })

app.get('/', (req, res) => {
    res.send('welcome to the server')
})
const mongodb = "mongodb+srv://adam:sc08@crud-mern-db.w1asm.mongodb.net/newDB?retryWrites=true&w=majority"
const PORT = process.env.PORT || 1000;

mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => app.listen(PORT, () => {
    console.log("the server is working")
})).catch((err) => console.log(err))

app.use("/persons", personRoutes)
