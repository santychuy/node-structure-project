import dotenv from 'dotenv';
import express from "express";
import path from 'path';
import morgan from 'morgan';
import hbs from 'express-handlebars';

if (process.env.NODE_ENV === 'development') { dotenv.config() }

import config from './config';

//Routes
import IndexRoutes from '../routes/index.routes';

//Inits
const app = express();
const port = config.appSetting.port

//Settings
app.set('port', port || 3000);
app.set('views', path.join(__dirname, '../views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    extname: '.hbs',
    //helpers: require('.')
})); 
app.set('view engine', '.hbs');

//Middlewares
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev')); }
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Init Routes
app.use(IndexRoutes);

//Static Files
app.use(express.static(path.join(__dirname, '../public')));

export default app;