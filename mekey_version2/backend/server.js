const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const cors = require('cors')
dotenv.config()

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = 'mekey';

client.connect();
const db = client.db(dbName);

const app = express();
app.use(bodyparser.json())
app.use(cors())
const port = process.env.PORT || 3000;


//Get all the passwords 
app.get('/', async (req, res) => {
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
});

// Save a password
app.post('/', async (req, res) => {
  const password = req.body
  const collection = db.collection('passwords');
  const insertResult = await collection.insertOne(password)
  res.send({
    success: true,
    result: insertResult
  })
});

// delete a password
app.delete('/', async (req, res) => {
  const password = req.body
  const collection = db.collection('passwords');
  const deleteResult = await collection.deleteOne(password)
  res.send({
    success: true,
    result: deleteResult
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
