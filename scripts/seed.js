const { MongoClient } = require('mongodb');
const casesData = require('./seed-data/cases');
const requestsData = require('./seed-data/requests');

const uri = 'mongodb://localhost:27017/law-firm-webapp';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('law-firm-webapp');

    // Seed Cases
    const casesCollection = database.collection('cases');
    await casesCollection.deleteMany({}); // Clear existing data
    await casesCollection.insertMany(casesData);
    console.log(`${casesData.length} cases seeded`);

    // Seed Requests
    const requestsCollection = database.collection('requests');
    await requestsCollection.deleteMany({}); // Clear existing data
    await requestsCollection.insertMany(requestsData);
    console.log(`${requestsData.length} requests seeded`);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
