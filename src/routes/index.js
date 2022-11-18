import { Router } from "express";
import { conn } from "../db.js"
// import { prueba } from "../public/js/dataTables.js";

const router = Router();

router.get("/", (req, res) => {
    //LOGIN CUANDO LA SESION ESTA INICIADA
    res.render("index", {title: 'Referidos Atento'})

    //LOGIN CUANDO NO HAY SESION INICIADA
});

router.get("/referir", (req, res) => res.render("referir", {title: 'Referidos Atento'}));

router.get("/estado", (req, res) => {
    conn.query('SELECT * from users', (err, result) => {
        if (err) {
            throw err
        } else {
            // prueba('hola')
            res.render("estado", {resultado: result, title: 'Referidos Atento'})
        }
    })
});

router.get("/login", (req, res) => res.render("login", {title: 'Referidos Atento'}));
router.get("/&0@%&&", (req, res) => {
        res.render("&0@%&&", {title: 'Referidos Atento'})
});

export default router;
