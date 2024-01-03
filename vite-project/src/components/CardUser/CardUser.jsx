import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { products } from "../../Products";

const CardUser = ({ products }) => {
    const { titulo, imagen, detalle, precio } = products;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia component="img" image={imagen} alt="img" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {detalle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {precio}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardUser;
