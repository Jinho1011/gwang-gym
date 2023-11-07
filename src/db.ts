import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PWD}@cluster0.3qfbauf.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { monitorCommands: true });
let db;

export async function connectDb() {
  if (!db) {
    await client.connect();
    db = client.db('gwang-gym');
  }
  return db;
}
