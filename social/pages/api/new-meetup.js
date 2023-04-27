// /api/new-meetup
// POST /api/new-meetup
// TODO MongoDB 

import { MongoClient } from 'mongodb';


async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
   
    const { title, image, address, description } = data;
    
    const uri = "mongodb+srv://luluBlue:75qf7vXP25tOMA8G@cluster0.aoag1gt.mongodb.net/socialapp?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    //Prespecified collections on Atlas or generate new one
    const meetupsCollection = db.collection('socialapp');

    const result = await meetupsCollection.insertOne(data);
   
    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;