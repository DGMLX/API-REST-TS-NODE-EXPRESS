import express from "express";
import morgan from "morgan";
import routerUser from "./routes/appRouter";


const app = express();

app.use(express.json());
app.use('/api',routerUser);
app.use(morgan("dev"));




export default app;