import app from './app';
import 'reflect-metadata';
import './database';


const port = 3000;
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log('🚀 Server started on port', port);
});