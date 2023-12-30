import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
    let { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) => setchars(json.data)
        );
    }, [id]);
    
    return ( 
        <div style={{display:"flex", justifyContent: "center", margin: 20}}> 
            {Char.id ? <CardUser char={char} /> :null}
        </div>
    )
}

export default DetailPage