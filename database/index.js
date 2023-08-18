const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const uri = process.env.MONGODB_KEY;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const collection = client.db("barmitzva").collection("guests");

const addGuest = async (fName, lName, number, phone) => {
  const response = await collection.insertOne({
    fName,
    lName,
    number,
    phone,
    _id: new ObjectId(),
  });

  if (response) {
    console.log(
      `Successfuly added ${fName + " " + lName} (${phone}) number of guests: ${number} to the database.`
    );
    return { ok: true };
  } else {
    console.log("Could not add guest to the database");
    return { ok: false };
  }
};

const getGuests = async () => {
    const response = await collection
    .find()
    .toArray()
    return response;
};

module.exports = { addGuest, getGuests };
