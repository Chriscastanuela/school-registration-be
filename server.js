const express = require('express');
const app = express();

app.set('port', 3000);

app.locals.title = 'School registration site backend';

app.locals.students = [
    {id: 001, firstName: 'Ruth', lastName: 'Bader-Ginsburg', email: 'rbg1@gmail.com', courses: []},
    {id: 002, firstName: 'Sarah', lastName: 'Silverman', email: 'ss1@gmail.com', courses: []},
]

app.locals.courses = [
    {id: 001, name: 'English', time: 03/29/21},
    {id: 002, name: 'History', time: 03/30/21},
    {id: 003, name: 'Trigonometry', time: 03/31/21},
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
    const course = app.locals.courses.find(course => course.id === id);
    if (!pet) {
        return response.sendStatus(404);
      }

    response.status(200).json(course);
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});