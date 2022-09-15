import express from 'express';
import mongoose from 'mongoose';
import {MongoDBUris, PORT} from './cnb-1-main/config';
import {appUse} from './cnb-1-main/app';
import {routes} from './cnb-1-main/routes';
require('dotenv').config()
const cors = require('cors')
const app = express();

appUse(cors());
routes(app);

mongoose.connect(MongoDBUris, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => {
        console.log("MongoDB connected successfully");

        const port = process.env.PORT || PORT;

        app.listen(port, async() => {
            console.log("Products-back 1.0 listening on port: " + port);
        });
    })
    .catch(e => console.log("MongoDB connection error: ", {...e}));

process.on("unhandledRejection", (reason, p) => {
    console.log("unhandledRejection: ", reason, p);
});
