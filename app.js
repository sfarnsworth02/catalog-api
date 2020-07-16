const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {PORT} = require('./config');
const connection = require('./connection');

const app = express();
connection();

/* Middleware */
app.use(cors());
app.use(express.json());

//import the DAO
const Concept = require('./components/concepts/concept.dao');
const Note = require('./components/notes/note.dao');
//import the router factory
const routerFactory = require('./components/routerFactory');

/* --- Routes --- */
app.use('/', routerFactory(Concept));
app.use('/', routerFactory(Note));

app.listen(PORT || 5050, (err) =>
{
    if(err)
    {
        console.log(`Error starting server on port ${PORT}`, err);
    }
    console.log(`Server listening on port ${PORT}`)
})