import express from 'express'
import { connect, Error, HydratedDocument } from 'mongoose'
import Event from './api/event/router';
import EO from './api/eo/router';
import bodyParser from 'body-parser';


const port = 3000

const app = express();

const runServer = async function () {
    try {
        await connect('mongodb+srv://yukenz:pwnyaaltf4@cluster0.13stlxz.mongodb.net/retryWrites=true&w=majority', {
            dbName: "jfestindo",
        })
        console.log("Server Start on port", port)
        app.listen(port)
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }

}()

// app.listen(port)

app.use(bodyParser.urlencoded({ extended: true }));

/* event */
app.use(Event)
/* eo */
app.use(EO)

app.get('/', async (req, res) => {

    res.send("ROOTGET")

})


