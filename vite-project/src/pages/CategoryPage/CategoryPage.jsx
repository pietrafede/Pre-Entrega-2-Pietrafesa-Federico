import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const CategoryPage = () => {
    const [chars, setChars] = useState([]);
    let { categoryId } = useParams();

    let filteredCharacters = chars.filter((char) => {
        return char.species === categoryId;
    });

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character").then((res) =>
        setChars(res.data.results)
        );
    }, []);

    return (
        <div className="Cards-List">
        {filteredCharacters.map((char) => {
            return (
            <div style={{ margin: 10 }} key={char.id}>
                <CardUser char={char} />
            </div>
            );
        })}
        </div>
    );
};

export default CategoryPage;
