import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());

// Routers
app.use("/", router);

//static Images Folder
app.use("/Images", express.static("./Images"));

const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listen on port ${port}`));
