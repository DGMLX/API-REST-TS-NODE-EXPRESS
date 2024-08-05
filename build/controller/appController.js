"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarUsuarioController = exports.eliminarUsuarioController = exports.agregarUsuarioController = exports.obtenerUsuarioController = exports.obtenerUsuariosController = exports.homePageController = void 0;
const homePageController = (_req, res) => {
    res.send('<h1>Bienvenido a Home Page</h1>');
};
exports.homePageController = homePageController;
const obtenerUsuariosController = (_req, res) => {
    res.send('<h1>obteniendo usuarios</h1>');
};
exports.obtenerUsuariosController = obtenerUsuariosController;
const obtenerUsuarioController = (_req, res) => {
    res.send('<h1>obteniendo un usuario</h1>');
};
exports.obtenerUsuarioController = obtenerUsuarioController;
const agregarUsuarioController = (_req, res) => {
    res.send('<h1>agregando un usuario</h1>');
};
exports.agregarUsuarioController = agregarUsuarioController;
const eliminarUsuarioController = (_req, res) => {
    res.send('<h1>eliminando un usuario</h1>');
};
exports.eliminarUsuarioController = eliminarUsuarioController;
const modificarUsuarioController = (_req, res) => {
    res.send('<h1>modificando un usuario</h1>');
};
exports.modificarUsuarioController = modificarUsuarioController;
