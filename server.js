const express = require('express');
const app = express();
app.use(express.json());

app.set('port', 3000);

app.locals.title = 'School registration site backend';

app.locals.students = []

app.locals.courses = [
    {id: 'aaa', name: 'English', time: '03/29/21'},
    {id: 'aab', name: 'History', time: '03/30/21'},
    {id: 'aac', name: 'Trigonometry', time: '03/31/21'},
]

// app.get('/api/v1/students', (request, response) => {
//     const students = app.locals.students;
//     response.json({ students });
// });

app.get('/api/v1/students:id', (request, response) => {
    const { id } = request.params;
    const student = app.locals.students.find(student => student.id === id);

    response.status(200).json(student);
});

// app.get('/api/v1/courses', (request, response) => {
//     const courses = app.locals.courses;
//     response.json({ courses });
// });

app.get('/api/v1/courses:id', (request, response) => {
    const { id } = request.params;
    const course = app.locals.courses.find(course => course.id === id);
    if (!pet) {
        return response.sendStatus(404);
      }

    response.status(200).json(course);
});

app.post('/api/v1/students', (request, response) => {
    const id = Date.now();
    const { firstName, lastName, email, courses } = request.body;

    if (!firstName || !lastName || !email || !courses) {
        response
          .status(422)
          .send({ error: `Expected format: { id, firstName: <String>, lastName: <String>, email: <String>, courses: <String> }. You're missing a property.` });
    }

    app.locals.students.push({ id, firstName, lastName, email, courses });

    response.status(201).json({ id, firstName, lastName, email, courses });
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});