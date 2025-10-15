import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('combined'));

// Static users database
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'admin' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'user' }
];

app.get('/users', (request, response) => {

  const { role } = request.query;

  if (!role) {
    return response.json(users);
  }

  const filtered = users.filter(u => u.role === role);
  return response.json(filtered);

});

app.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const userId = parseInt(id);
  const user = users.find(u => u.id === userId);

  if (user) {
    response.json(user);
  } else {
    response.status(404).json({ error: 'User not found' });
  }
});

app.put('/users/:id', (request, response) => {
  const { id } = request.params;
  const { role } = request.body;
  const userId = parseInt(id);

  const user = users.find(u => u.id === userId);

  if (!user) {
    return response.status(404).json({ error: 'User not found' });
  }

  user.role = role;
  response.json(user);
});


app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
