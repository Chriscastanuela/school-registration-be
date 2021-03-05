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

app.get('/api/v1/students', (request, response) => {
    const students = app.locals.students;
    response.json({ students });
});

app.get('/api/v1/students:id', (request, response) => {
    const { id } = request.params;
    const student = app.locals.students.find(student => student.id === id);

    response.status(200).json(student);
});

app.get('/api/v1/courses', (request, response) => {
    const courses = app.locals.courses;
    response.json({ courses });
});

app.get('/api/v1/courses:id', (request, response) => {
    const { id } = request.params;
    const courses = app.locals.courses.find(course => course.id === id);

    response.status(200).json(course);
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});