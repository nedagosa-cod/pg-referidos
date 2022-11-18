import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";
import {PORT} from "./config.js"
import exp from "constants";
import * as cors from 'cors';
// import { conn } from "./db.js"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes);
app.use(express.static(join(__dirname, "public")));

app.listen(PORT);
