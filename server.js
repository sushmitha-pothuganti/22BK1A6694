//{
 //   "email": "sushmithapothuganti2004@gamil.com",
   // "name": "pothuganti sushmitha",
   // "rollNo": "22bk1a6694",
   // "accessCode": "vpJgsZ",
   // "clientID": "59bda045-81fc-48a8-a94e-64bfb965bfd0",
  //  "clientSecret": "kFSasRDcahzWSStH"}
// =========================
// question1/server.js
// =========================

// server.js

import express from "express";
import dotenv from "dotenv";
import urlRoutes from "./routes/urlRoutes.js";
import { logger } from "./middleware/logger.js";
import { authorize } from "./middleware/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());


app.use(logger);
app.use(authorize);


app.use("/api", urlRoutes);


app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
