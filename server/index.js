const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
const port = 5000;


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j1wjl.mongodb.net/doctors-hub?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const appointmentsCollection = client.db("doctors-hub").collection("appointments");
  // perform actions on the collection object
  //   client.close();

  app.post('/addAppointment',(req,res) => {
      const appointment = req.body;
    appointmentsCollection.insertOne(appointment)
    .then(result => {
        res.send(result.insertedCount > 0);
    })
  })

  app.get('/appointments',(req,res) => {
    appointmentsCollection.find().toArray((err,items) => {
        console.log('from database ',items)
        res.send(items)
     })
  })
  app.post('/appointmentsByDate',(req,res) => {
    const date = req.body;
    
    const newDate = new Date(date.date);
    console.log(newDate);
    const convertedDate = newDate.toDateString();
    console.log(convertedDate);
    appointmentsCollection.find({date: convertedDate}).toArray((err,documents)=>{
      console.log(documents);
        res.send(documents);
    })
  })








  console.log('Database Connected');
});





app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(process.env.PORT || port, () => {
    console.log(`listening at http://localhost:${port}`)
  })