const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const startLogin = async (req = request, res = response) => {

    const { correo, password } = req.body;

    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
        return res.status(400).json({
            msg: 'Usuario / Password no son correctos - correo',
        });
    }

    // Si el usuario está activo
    if (!usuario.estado) {
        return res.status(400).json({
            msg: 'Usuario / Password no son correctos - estado: false',
        });
    }

    // Verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
        return res.status(400).json({
            msg: 'Usuario / Password no son correctos - password',
        });
    }

    res.status(200).json({
        usuario,
        msg: 'Login ok',
    });
};

const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usuario.save();

    res.status(200).json({
        usuario,
    });
};



const usuariosDelete = async (req, res = response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
    res.json(usuario);
};




module.exports = {
    startLogin,
    usuariosPost,
    usuariosDelete,
};
