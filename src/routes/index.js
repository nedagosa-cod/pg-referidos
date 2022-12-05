import { Router } from "express";
import { methods_crud } from "../controller/methods_crud.js";
import { conn } from "../db.js"

const router = Router();

router.get("/", (req, res) => {
    //LOGIN CUANDO LA SESION ESTA INICIADA
    res.render("index", {title: 'Referidos Atento'})

    //LOGIN CUANDO NO HAY SESION INICIADA
});

router.get("/referir", (req, res) => res.render("referir", {title: 'Referidos Atento'}));
router.get("/sendok", (req, res) => res.render("sendok", {title: 'Referidos Atento'}));

router.get("/estado", methods_crud.leer);
router.post("/crud_crear", methods_crud.crear);
router.post("/crud_buscar", methods_crud.buscar);

router.get("/login", (req, res) => res.render("login", {title: 'Referidos Atento'}));

router.post("/&0@%&&", methods_crud.login);
router.post("/crud_actualizar", methods_crud.actualizar)
router.get("/crud_editar/:id", methods_crud.editar)


export default router;
