const express = require('express');
const app = express();

app.set('port', 3000);

app.locals.title = 'School registration site backend';

app.locals.students = [
    {id: 001, firstName: 'Ruth', lastName: 'Bader-Ginsburg', email: 'rbg1@gmail.com', courses: []},
]

app.locals.courses = [
    {id: 001, name: '', time: 03/30/21},
]

