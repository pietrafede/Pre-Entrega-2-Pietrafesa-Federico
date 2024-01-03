import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
import { products } from "../../Products";

const DetailPage = () => {
    let { id } = useParams();
    const [products, setItem] = useState(null);

    useEffect(() => {
        const products = products.find((products) => products.id === parseInt(id));
        if (products) {
            setItem(products);
        } else {
            console.error(`No se encontró el producto con ID ${id}`);
        }
    }, [id]);
    
    if (!products) {
        return <div>Producto no encontrado.</div>;
    }

    return ( 
        <div style={{display:"flex", justifyContent: "center", margin: 20}}> 
            {products.id ? <CardUser products={products} /> :null}
        </div>
    )
}

export default DetailPage