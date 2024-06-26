import React, {useState, useEffect} from "react";
import articulosvc from "../services/articulosvc";
import TablaArticulos from "./TablaArticulos"


export default function Articulos (){
    const [rows, setRows] = useState([])
    //const [action, setAction] = useState('C')

    const loadGrid = async() =>{
        const data = await articulosvc.getArticulos()
        setRows(data)
    }
    useEffect(() => {
        loadGrid()
    }, [])

    return (
        <>
        <TablaArticulos rows={rows}></TablaArticulos>
        </>
    )
}