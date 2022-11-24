// import { express } from "express";
import { conn } from "../db.js";

let methods_crud = ({})

methods_crud.leer = (req, res) => {

    conn.query('SELECT * from users', (err, result) => {
        if (err) {throw err} else {
            res.render("estado", {resultado: result, title: 'Referidos', search: false})
        }
    })
}

methods_crud.crear = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const nombre_r = req.body.name_r;
    const telefono_r = req.body.telefono_r;
    const telefono_rii = req.body.telefono_rii;
    const campana_r = req.body.campaña_r;
    const sede_r = req.body.sede_r;
    const name_e = req.body.name_e;
    const documento_e = req.body.documento_e;
    const telefono_e = req.body.telefono_e;
    const antiguedad_e = req.body.antiguedad_e;
    const campana_e = req.body.campana_e;
    const sede_e = req.body.sede_e;
    const coordinador_e = req.body.cordi_e;
    // const hv_r = req.body.hv_r;

    let createSql = 
    "INSERT INTO users (name_e, documento_e, telefono_e, antiguedad_e, campana_e, sede_e, coordinador_e, nombre_r, telefono_r, telefono_rii, campana_r, sede_r, estado, fecha)" +
    "VALUES" + 
    `('${name_e}', ${documento_e}, ${telefono_e}, '${antiguedad_e}', '${campana_e}', '${sede_e}', '${coordinador_e}', '${nombre_r}', ${telefono_r}, ${telefono_rii}, '${campana_r}', '${sede_r}', 'Pendiente', NOW())`

    conn.query(createSql,(err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/referir')
        }
    })
}

methods_crud.login = (req, res) => {
    const user_loggin = req.body.user_loggin;
    const pass_loggin = req.body.pass_loggin;

    if (user_loggin == 'adminreferidos' && pass_loggin == 'Atento22') {
        conn.query('SELECT * from users', (err, result) => {
            if (err) {throw err} else {
                res.render("&0@%&&", {resultado: result, title: 'Referidos'})
            }
        })
    } else {
        
        res.redirect('/login')
    }
}

methods_crud.buscar = (req, res) => {
    const searchCedula = req.body.searchCedula

    conn.query('SELECT * from users', (err, result) => {
        if (err) {console.log(err)} else {
            res.render("estado", {filas: result, searchCedula: searchCedula ,title: 'Referidos', search: true}) 
        }
    })
}

methods_crud.actualizar = (req, res) => {
    const nombre_r = req.body.nombre_r;
    const telefono_r = req.body.telefono_r;
    const telefono_rii = req.body.telefono_rii;
    const campana_r = req.body.campana_r;
    const sede_r = req.body.sede_r;
    const name_e = req.body.name_e;
    const documento_e = req.body.documento_e;
    const telefono_e = req.body.telefono_e;
    const antiguedad_e = req.body.antiguedad_e;
    const campana_e = req.body.campana_e;
    const sede_e = req.body.sede_e;
    const coordinador_e = req.body.coordinador_e;

    const select_id = req.body.estado
    const delselect_id = req.body.delselect_id

    let createSql = 
    `UPDATE users estado ? where id = ?`
    
    const fechaa = new Date()

    conn.query(createSql, [{ estado:select_id}, delselect_id], //// hacer que select id no se lean todos al tiempo
        (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/referir')
        }
    })
}
export {methods_crud}

