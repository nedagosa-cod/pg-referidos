import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";
import {PORT} from "./config.js"
import {pool} from './db.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes);
app.use(express.static(join(__dirname, "public")));

app.get("/", async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users ');
    res.json(rows)
});

app.get("/ping", async (req, res) => {
    const [result] = await pool.query(`SELECT "hello world" as RESULT`);
    res.json(result[0])
});

app.get("/create", async (req, res) => {
    const createResult = await pool.query('INSERT INTO users(name) VALUES ("NESTOR")');
    res.json(createResult)
});

app.listen(PORT);
