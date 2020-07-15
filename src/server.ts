import app from './app';
import 'reflect-metadata';
import './database';


const port = 3000
app.listen(port, () => {
  console.log('Server started on port', port);
});