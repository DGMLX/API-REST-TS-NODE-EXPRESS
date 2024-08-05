import express from 'express';
import {agregarUsuarioController, eliminarUsuarioController, homePageController, modificarUsuarioController, obtenerUsuarioController, obtenerUsuariosController} from "../controller/appController"

const router = express.Router();

router.get('/',homePageController);
router.get('/obtenerUsuarios',obtenerUsuariosController);
router.get('/obtenerUsuarios/:id',obtenerUsuarioController);
router.post('/agregarUsuario',agregarUsuarioController);
router.delete('/eliminarUsuario',eliminarUsuarioController);
router.put('/modificarUsuario',modificarUsuarioController);


export default router;