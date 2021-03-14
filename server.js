const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors')
app.use(cors())

app.set('port', 3001);

app.locals.title = 'School registration site backend';

app.locals.students = [
    {id: 'aaa', firstName: 'Ruth', lastName: 'Bader-Ginsburg', email: 'rbg1@hotmail.com', courses: []},
]

app.locals.courses = [
    {id: 'aaa', name: 'English', time: '03/29/21'},
    {id: 'aab', name: 'History', time: '03/30/21'},
    {id: 'aac', name: 'Trigonometry', time: '03/31/21'},
]

app.get('/api/v1/students', (request, response) => {
    const students = app.locals.students;
    response.json({ students });
});

app.get('/api/v1/students:id', (request, response) => {
    const { id } = request.body;
    const student = app.locals.students.find(student => student.id === id);

    response.status(200).json(student);
});

app.get('/api/v1/courses:id', (request, response) => {
    const { id } = request.params;
    const course = app.locals.courses.find(course => course.id === id);
    if (!pet) {
        return response.sendStatus(404);
      }

    response.status(200).json(course);
});

app.post('/api/v1/students', (request, response) => {
    if (request.body.firstName && request.body.lastName && request.body.email) {
        const id = Date.now();
        const { firstName, lastName, email } = request.body;
        const courses = [];

        app.locals.students.push({ id, firstName, lastName, email, courses });
        response.status(201).json({ id, firstName, lastName, email, courses });
    } else {
        response
          .status(422)
          .send({ error: `Unable to register, you're missing a property.` });
    }
});

app.post('api/vi/students/course', (request, response) => {
    if (request.body.id) {
        const theStudent = app.locals.students.find(a => a.id == request.body.studentId);
        theStudent.courses.push(request.body.courseId)
    } else {
        response
          .status(422)
          .send({ error: `You're missing a property.` });
    }
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});