import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Ensure CORS_ORIGIN is correctly defined in your .env
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// rout import
import userRouter from './routes/user.router.js'; 

app.use("/api/v1/users", userRouter);

export {app}
