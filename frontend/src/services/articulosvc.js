const URL = 'http://localhost:3000/articulos'

async function getArticulos(){
    const res = await fetch(URL)
    const data = await res.json()
    return data;
}

export default {getArticulos}