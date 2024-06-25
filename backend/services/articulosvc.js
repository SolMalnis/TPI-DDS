import {Articulos, TiposArticulos, Proveedores} from '../model/ventas.js'

import {Op} from "sequelize"


async function getAll(){
    return await Articulos.findAll()
}

const insertarArticulo = async (ArticuloCmd) => {
    console.log(ArticuloCmd)
    const resultado = await Articulos.create({
        IdArticulo :ArticuloCmd.IdArticulo,
        NombreArticulo: ArticuloCmd.NombreArticulo,
        Precio : ArticuloCmd.Precio,
        


    })
    return {
        id: resultado.dataValues.Id,
        titulo: resultado.dataValues.Titulo,

    };
}


