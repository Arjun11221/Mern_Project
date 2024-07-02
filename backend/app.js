import express from "express";
import router from "./routes/web.js";
import cors from "cors";
import connectDb from "./db/connectDb.js";
import path from "path";

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:5000',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static(path.join(process.cwd(),"public/images")));

app.use(express.json());

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
connectDb(DATABASE_URL);

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
