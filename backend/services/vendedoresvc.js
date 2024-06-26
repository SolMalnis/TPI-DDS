import { Vendedores, Ciudades} from '../model/ventas.js'

async function getAll(){
    return await Vendedores.findAll()
}


