import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import config from './config/config';

import users from './routes/users.route';
import subscribers from './routes/subscribers.route';
import calls from './routes/calls.route';
import messages from './routes/messages.route';

const app = express();

app.use("/audio", express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB Successfully Connected")
}).catch(err => {
    console.log(err);
});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(users);
app.use(subscribers);
app.use(calls);
app.use(messages);

app.listen(config.port, () => {
    console.log(`App started on port ${config.port}`);
});

export default app;