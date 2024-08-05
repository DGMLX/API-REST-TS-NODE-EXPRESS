"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appController_1 = require("../controller/appController");
const router = express_1.default.Router();
router.get('/', appController_1.homePageController);
router.get('/obtenerUsuarios', appController_1.obtenerUsuariosController);
router.get('/obtenerUsuarios/:id', appController_1.obtenerUsuarioController);
router.post('/agregarUsuario', appController_1.agregarUsuarioController);
router.delete('/eliminarUsuario', appController_1.eliminarUsuarioController);
router.put('/modificarUsuario', appController_1.modificarUsuarioController);
exports.default = router;
