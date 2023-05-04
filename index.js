import express from 'express';
import cors from 'cors';
import router from './routes/user-route.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

// Set up database
const mongoString = process.env.ATLAS_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(console.error(error));
});

// Set up app
const app = express()

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use('/api', router);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
