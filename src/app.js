import express from 'express';
import path from 'path';


import userRoutes from './route/userRoutes.js'

import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT,'0.0.0.0', () => {
  console.log(" Server is running on PORT:", PORT);
});