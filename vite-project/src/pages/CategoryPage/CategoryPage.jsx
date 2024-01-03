import { products } from "../../Products";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const CategoryPage = () => {
    let { categoryId } = useParams();

    let filteredproducts = products.filter((products) => {
        return products.categoria.id === categoryId;
    });


    return (
        <div className="Cards-List">
        {filteredproducts.map((products) => {
            return (
            <div style={{ margin: 10 }} key={products.id}>
                <CardUser products={products} />
            </div>
            );
        })}
        </div>
    );
};

export default CategoryPage;
