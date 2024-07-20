import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';
import { createUserTable } from './models/userModel';
import { createPostTable } from './models/postModel';
import './types'; // This should be at the top of your server.ts

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api', postRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Authentication API');
});

app.listen(port, async () => {
  await createUserTable();
  await createPostTable();
  console.log(`Server is running on http://localhost:${port}`);
});
