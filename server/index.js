// Importing modules
import express from "express";
import cors from "cors";
import cookies from "cookie-parser";
import dotenv from "dotenv";

// Importing files
import connect from "./db.js";
import authRouter from "./routes/authRouter.js";
import ngoRouter from "./routes/ngoRouter.js";
import eventRouter from "./routes/eventRouter.js";
import volunteerRouter from "./routes/volunteerRouter.js";
import detailsRouter from "./routes/detailsRouter.js";
import notify from "./utils/schedule.js";
import sendMail from "./utils/sendMail.js";

// App config
const PORT = 3001;
const app = express();
dotenv.config();

// connnect to database
connect();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    credentials: true,
    setCredentials: true,
  })
);
app.use(cookies());

// Routes for the API
app.get("/", (req, res) => res.send("Hello World!"));

// API routes

// 1. Authentication Router
app.use("/api/v4/auth", authRouter);
// 2. Ngo Router
app.use("/api/v4/ngo", ngoRouter);
// 3. Event Router
app.use("/api/v4/event", eventRouter);
// 4. Volunteer Router
app.use("/api/v4/volunteer", volunteerRouter);
// 5. Separate Route
app.use("/api/v4", detailsRouter);

app.get("/sendmail", (req, res) => {
  sendMail();
  console.log("Mail sent")
  res.json("Mail sent");
});

// Listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
