import { Request, Response } from 'express';
import datos from "../data/usuarios.json";

export const homePageController = (_req:Request,res:Response) =>{
    try {
        res.send('<h1>Bienvenido, esta es una API realizada con TS + NodeJS + Express</h1>')   
    } catch (error) {
        res.status(400).json({mensaje:"No se pudo cargar la pagina de Inicio"})
    }
}

export const obtenerUsuariosController = (_req:Request,res:Response) =>{
    try {
        res.json(datos)
    } catch (error) {
        res.status(400).json({mensaje:"No se pudo obtener los usuarios"})
    }
}

export const obtenerUsuarioController = (req:Request,res:Response) =>{
    try {
        const {id} = req.params
        const usuario = datos.filter(user=>user.id === Number(id))
        if(usuario.length === 0){
            res.json({
                mensaje:"El usuario no existe"
            })   
        }else{
            res.json(usuario)    
        }
    } catch (error) {
        res.status(400).json({mensaje:"No se pudo obtener el usuario."})
    }
}

export const agregarUsuarioController = (_req:Request,res:Response) =>{
    res.send('<h1>agregando un usuario</h1>')
}

export const eliminarUsuarioController = (_req:Request,res:Response) =>{
    res.send('<h1>eliminando un usuario</h1>')
}

export const modificarUsuarioController = (_req:Request,res:Response) =>{
    res.send('<h1>modificando un usuario</h1>')
}