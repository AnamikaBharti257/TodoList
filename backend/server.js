import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import greetRoutes from "./routes/greetRoutes.js";
import ageRoutes from "./routes/ageRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.use("/api/greet"  , greetRoutes);
app.use("/api/check-age" , ageRoutes);
app.use("/api/todos",todoRoutes);


dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});