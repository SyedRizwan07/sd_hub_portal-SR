import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app=express();
const port=3000;

app.use(cors());

app.use(express.json());const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
await client.connect();
console.log("Database Connected");
const db = client.db('R');
const collection = db.collection('newStudents');

app.post('/register', async (req, res) => {
    console.log(req.body);
    const inserted = await collection.insertOne(req.body);
    console.log(inserted);
    res.status(201).json(inserted);
})


app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})