// Importamos React
import React from "react";

// Importamos el contexto donde se guardan los favoritos
import { useFavorites } from "../../../context/FavoritesContext";

// Componentes de Material UI que vamos a usar
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  Alert
} from "@mui/material";

// Iconos
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Componente principal de la página de favoritos
export const Myfavorities = () => {

  // Obtenemos los favoritos y la función para eliminar
  const { favorites, removeFromFavorites } = useFavorites();


  // Función que elimina un producto de favoritos
  const handleRemove = (id) => {
    removeFromFavorites(id);
  };


  // Función sencilla para cambiar el color del stock
  const stockColor = (stock) => {

    if (stock > 30) {
      return "success";
    }

    if (stock > 10) {
      return "warning";
    }

    return "error";
  };


  return (

    // Contenedor principal de la página
    <Container maxWidth="lg" sx={{ mt: 4 }}>

      {/* Título */}
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        Mis Favoritos
      </Typography>


      {/* Si no hay favoritos mostramos mensaje */}
      {favorites.length === 0 ? (

        <Alert severity="info">
          No tienes productos en favoritos.
        </Alert>

      ) : (

        <>

          {/* Cantidad de productos */}
          <Typography sx={{ mb: 3 }}>
            Tienes {favorites.length} producto(s) guardados
          </Typography>


          {/* Grid donde se muestran las tarjetas */}
          <Grid container spacing={3}>

            {favorites.map((product) => (

              <Grid item xs={12} sm={6} md={4} key={product.id}>

                <Card sx={{ height: "100%" }}>

                  {/* Imagen del producto */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />

                  <CardContent>

                    {/* Nombre del producto */}
                    <Typography variant="h6">
                      {product.name}
                    </Typography>

                    {/* Descripción */}
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>

                    {/* Estado del stock */}
                    <Box sx={{ mb: 1 }}>
                      <Chip
                        label={`Stock: ${product.stock}`}
                        color={stockColor(product.stock)}
                        size="small"
                      />
                    </Box>

                    {/* Precio */}
                    <Typography variant="h6" color="primary">
                      ${product.price.toFixed(2)}
                    </Typography>

                  </CardContent>


                  {/* Botones de acciones */}
                  <CardActions>

                    {/* Botón comprar */}
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Comprar
                    </Button>


                    {/* Botón eliminar */}
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleRemove(product.id)}
                    >
                      Eliminar
                    </Button>

                  </CardActions>

                </Card>

              </Grid>

            ))}

          </Grid>

        </>

      )}

    </Container>

  );
};