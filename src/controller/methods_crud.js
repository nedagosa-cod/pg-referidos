// import { express } from "express";
import { conn } from "../db.js";

let methods_crud = ({})

methods_crud.leer = (req, res) => {

    // let createSql = "INSERT INTO users (nombre_r, campana_r, sede_r) VALUES ('nombre prueba', 'campana', 'sede')"
    // conn.query(createSql, (err, result) =>{
    //     if (err) {throw err}       
    // })



    conn.query('SELECT * from users', (err, result) => {
        if (err) {throw err} else {
            res.render("estado", {resultado: result, title: 'Referidos Atento'})
        }
    })
}

methods_crud.crear = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const nombre_r = req.body.name_r;
    const telefono_r = req.body.telefono_r;
    const campana_r = req.body.campaña_r;
    const sede_r = req.body.sede_r;
    const name_e = req.body.name_e;
    const documento_e = req.body.documento_e;
    const telefono_e = req.body.telefono_e;
    const antiguedad_e = req.body.antiguedad_e;
    const campana_e = req.body.campaña_e;
    const sede_e = req.body.sede_e;
    const coordinador_e = req.body.cordi_e;
    if (btn_crear) {
        conn.query('INSERT INTO `railway`.`users`', {
            'name_e': name_e,
            'documento_e': documento_e,
            'telefono_e': telefono_e,
            'telefono_e': telefono_e,
            'antiguedad_e': antiguedad_e,
            'campana_e': campana_e,
            'sede_e': sede_e,
            'coordinador_e': coordinador_e,
            'nombre_r': nombre_r,
            'telefono_r': telefono_r,
            'campana_r': campana_r,
            'sede_r': sede_r,
        },(err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/')
            }
        })
    }
}
export {methods_crud}

