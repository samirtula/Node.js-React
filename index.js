import express from 'express';
import mongoose from "mongoose";
import {registerValidation} from './validations/validations.js';
import checkAuth from "./utils/checkAuth.js";
//import {register, login, getme} from './validations/auth.js';
import * as UserController from './controllers/UserController.js';


mongoose.connect('mongodb://localhost:27017/course')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.post('/auth/login', UserController.login)
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe)

app.listen(4444, (err) => {

    if (err) {
        return console.log(err);
    }
    console.log('Server ok');
});