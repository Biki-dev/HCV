const { MongoClient } = require("mongodb");
const fs = require("fs");

// Replace this with your MongoDB Atlas connection string
const uri = "mongodb+srv://quotex99575:nbrCVp5wNfFzML9s@hcv.heicfn6.mongodb.net/?retryWrites=true&w=majority&appName=HCV";

const client = new MongoClient(uri);

async function upload() {
  try {
    await client.connect();
    const db = client.db("HCV");
    const collection = db.collection("questions");

    const data = fs.readFileSync("questions.json", "utf-8");
    const questions = JSON.parse(data);

    const result = await collection.insertMany(questions);
    console.log(`Successfully inserted ${result.insertedCount} questions.`);
  } catch (error) {
    console.error("Error uploading questions:", error);
  } finally {
    await client.close();
  }
}

upload();