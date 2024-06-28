import express from "express";
import router from "./routes/web.js";
import connectDb from "./db/connectDb.js";

const app = express();
const port = process.env.port || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());  // Add this line to parse JSON request bodies

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
connectDb(DATABASE_URL);

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
