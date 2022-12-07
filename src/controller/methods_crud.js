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

    const name_e = req.body.name_e;
    const documento_e = req.body.documento_e;
    const telefono_e = req.body.telefono_e;
    const antiguedad_e = req.body.antiguedad_e;
    const campana_e = req.body.campana_e;
    const sede_e = req.body.sede_e;
    const nombre_r = req.body.name_r;
    const telefono_r = req.body.telefono_r;
    const telefono_rii = req.body.telefono_rii != '' ? req.body.telefono_rii : '000';

    const campana_r_1 = req.body.campana_r_1 != undefined ? req.body.campana_r_1 : '';
    const campana_r_2 = req.body.campana_r_2 != undefined ? req.body.campana_r_2 : '';
    const campana_r_3 = req.body.campana_r_3 != undefined ? req.body.campana_r_3 : '';
    const campana_r_4 = req.body.campana_r_4 != undefined ? req.body.campana_r_4 : '';
    const campana_r_5 = req.body.campana_r_5 != undefined ? req.body.campana_r_5 : '';

    const sede_r_1 = req.body.sede_r_1 != undefined ? req.body.sede_r_1 : '';
    const sede_r_2 = req.body.sede_r_2 != undefined ? req.body.sede_r_2 : '';
    const sede_r_3 = req.body.sede_r_3 != undefined ? req.body.sede_r_3 : '';
    const sede_r_4 = req.body.sede_r_4 != undefined ? req.body.sede_r_4 : '';
    const sede_r_5 = req.body.sede_r_5 != undefined ? req.body.sede_r_5 : '';
    const sede_r_6 = req.body.sede_r_6 != undefined ? req.body.sede_r_6 : '';
    const sede_r_7 = req.body.sede_r_7 != undefined ? req.body.sede_r_7 : '';
    const sede_r_8 = req.body.sede_r_8 != undefined ? req.body.sede_r_8 : '';

    let createSql = 
    "INSERT INTO users (name_e, documento_e, telefono_e, antiguedad_e, campana_e, sede_e, nombre_r, telefono_r, telefono_rii, campana_r, sede_r, estado, fecha)" +
    "VALUES" + 
    `('${name_e}', ${documento_e}, ${telefono_e}, '${antiguedad_e}', '${campana_e}', '${sede_e}', '${nombre_r}', ${telefono_r}, ${telefono_rii}, '${campana_r_1 + campana_r_2  + campana_r_3 + campana_r_4 + campana_r_5}', '${sede_r_1 + sede_r_2 + sede_r_3 + sede_r_4 + sede_r_5 + sede_r_6 + sede_r_7 + sede_r_8}', 'Pendiente', NOW());`

    let resetID = "SET @num := 0;UPDATE users SET id = @num := (@num+1);ALTER TABLE users AUTO_INCREMENT =1;"

    conn.query(createSql,resetID,(err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/sendok')
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

methods_crud.editar = (req, res) => {

    const id = req.params.id

    const sqlSelect = `SELECT * FROM users WHERE id = ${id}`
    // const sqlUptade = "UPDATE `railway`.`users` SET `estado` =" + ` '${name}' WHERE (id = '${id}')`
    
    conn.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.render("e&1t4r", {user: result[0], title: 'Referidos'})
        }
    })
}

methods_crud.actualizar = (req, res) => {
    
    const id = req.body.id_editar
    const estado = req.body.estado
    
    const sqlUptade = `UPDATE users SET estado = '${estado}' WHERE id = ${id}`

    conn.query(sqlUptade,
        (err, resultt) => {
        if (err) {
            console.log(err)
        } else {
            conn.query('SELECT * from users', (error, result) => {
                if (error) {throw error} else {
                    res.render("&0@%&&", {resultado: result, title: 'Referidos'})
                }
            })
        }
    })
}
export {methods_crud}

