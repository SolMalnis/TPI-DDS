import { Clientes, Ciudades} from '../model/ventas.js'

async function getAll(){
    return await Clientes.findAll()
}


const insertarCliente = async (cliente) => {
    console.log(cliente)
    const resultado = await Clientes.create({
        DNI : cliente.DNI,
        NombreCliente: cliente.NombreCliente,
        ApellidoCliente : cliente.ApellidoCliente,
        FechaAlta: cliente.FechaAlta,
        idCiudad : cliente.idCiudad
    })
    return {
        IdCliente: resultado.dataValues.IdCliente,
        DNI: resultado.dataValues.DNI,

    };
}



async function get_one (id){
    const cliente = await Clientes.findOne({
        where:{
            IdVendedor : id 
        },
        include: 
            { model: Ciudades, as: 'Ciudades',}
              
    })
    if (cliente){
        
        return cliente
    }else {
        return ("no hay tal cliente")
    }
}


export default {getAll, get_one, insertarCliente}