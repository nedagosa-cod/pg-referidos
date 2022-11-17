import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", {title: 'Referidos Atento'}));
router.get("/referir", (req, res) => res.render("referir", {title: 'Referidos Atento'}));
router.get("/estado", (req, res) => res.render("estado", {title: 'Referidos Atento'}));
router.get("/login", (req, res) => res.render("login", {title: 'Referidos Atento'}));

export default router;
