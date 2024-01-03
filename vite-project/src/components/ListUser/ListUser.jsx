import CardUser from '../CardUser/CardUser';
import "./ListUser.css";
import { Link } from 'react-router-dom';
import { products } from "../../Products";

const ListUser = () => {
    return (
        <div className='Cards-List'>
            {products.map((products) => {
                return(
                    <div key={products.id}>
                        <Link to={`/detail/${products.id}`}> 
                        <CardUser products={products} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default ListUser