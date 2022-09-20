import express from "express";
import router from "./routes/routes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express";
import YAML from "yamljs";


const app = express();

const swaggerJSDocs = YAML.load("./service/api.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDocs));

app.use(express.json());



// Routers
app.use("/", router);

//static Images Folder
app.use("/Images", express.static("./Images"));

const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listen on port ${port}`));
