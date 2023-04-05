import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

const db = conn.db("exercises");

export default db;