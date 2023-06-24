import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { IProduct } from "../interface/IProduct";
import CircleIcon from "@mui/icons-material/Circle";

interface PropsCardProduct {
  listProducts: IProduct[];
}

export const CardProduct: React.FC<PropsCardProduct> = (props) => {
  const { listProducts } = props;

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listProducts.map((product) => {
          return (
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={product.productName}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={product.image[0]}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Colores:
                  </Typography>
                  {product.color.map((cl) => {
                    return <CircleIcon sx={{ color: `${cl}` }} />;
                  })}
                  <Typography>{`precio: C$ ${product.suggestedPrice}`}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
