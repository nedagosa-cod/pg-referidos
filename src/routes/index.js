import { Router } from "express";
import { conn } from "../db.js"

const router = Router();

router.get("/", (req, res) => res.render("index", {title: 'Referidos Atento'}));
router.get("/referir", (req, res) => res.render("referir", {title: 'Referidos Atento'}));
router.get("/estado", (req, res) => {
    conn.query('SELECT * from users', (err, result) => {
        if (err) {
            throw err
        } else {
            res.render("estado", {resultado: result, title: 'Referidos Atento'})
        }
    })
});
router.get("/login", (req, res) => res.render("login", {title: 'Referidos Atento'}));

export default router;
