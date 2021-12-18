require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

morgan.token('post', (req, res) => JSON.stringify(req.body));
app.use(
  morgan(function (tokens, req, res) {
    if (tokens.method(req, res) === 'POST') {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms',
        tokens.post(req, res)
      ].join(' ');
    } else {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms'
      ].join(' ');
    }
  })
);

app.post('/api/persons', (request, response) => {
  const { name, number } = request.body;

  if (!name || !number) {
    return response.status(400).json({
      error: 'content missing'
    });
  }

  const person = new Person({
    name: name,
    number: number
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

app.put('/api/persons/:id', (request, response, next) => {
  const { name, number } = request.body;
  const person = {
    name: name,
    number: number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => response.json(updatedPerson.toJSON()))
      .catch(error => next(error))
})


app.get('/info', (request, response) => {
  response.send(
      `<p>Phonebook has info for ${Person.length} people</p><p>${new Date()}</p>`
  );
});


app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) =>
      person ? response.json(person) : response.status(404).end()
    )
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => response.status(204).end())
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response, next) => {
  response.status(404).send({ error: 'unknown endpoint' });
  next(error);
};
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
