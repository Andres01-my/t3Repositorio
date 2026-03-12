// EDITADO - Complete Article page with gaming products
import React from 'react';
import { useFavorites } from '../../../context/FavoritesContext';
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
    Box 
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Article = () => {
    // EDITADO - Get favorites context
    const { addToFavorites, isFavorite } = useFavorites();

    // EDITADO - Array of 10 gaming products with video game themed products
    const products = [
        {
            id: 1,
            name: 'PlayStation 5 Slim',
            price: 499.99,
            stock: 15,
            image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop',
            description: 'Consola Next-Gen de Sony con SSD ultrarrápido'
        },
        {
            id: 2,
            name: 'Xbox Series X',
            price: 499.99,
            stock: 20,
            image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop',
            description: 'La consola más potente de Microsoft'
        },
        {
            id: 3,
            name: 'Nintendo Switch OLED',
            price: 349.99,
            stock: 25,
            image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop',
            description: 'Consola híbrida con pantalla OLED'
        },
        {
            id: 4,
            name: 'Mando DualSense PS5',
            price: 69.99,
            stock: 50,
            image: 'https://images.unsplash.com/photo-1612287230217-8c7684717995?w=400&h=300&fit=crop',
            description: 'Control con retroalimentación háptica y gatillos adaptativos'
        },
        {
            id: 5,
            name: 'Xbox Elite Controller',
            price: 179.99,
            stock: 30,
            image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop',
            description: 'Control profesional personalizable'
        },
        {
            id: 6,
            name: 'The Last of Us Part II',
            price: 59.99,
            stock: 40,
            image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0e?w=400&h=300&fit=crop',
            description: 'Juego exclusivo para PlayStation'
        },
        {
            id: 7,
            name: 'Halo Infinite',
            price: 59.99,
            stock: 35,
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
            description: 'El regreso del Jefe Maestro'
        },
        {
            id: 8,
            name: 'Zelda: Tears of the Kingdom',
            price: 69.99,
            stock: 28,
            image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=300&fit=crop',
            description: 'Aventura épica para Nintendo Switch'
        },
        {
            id: 9,
            name: 'Sony WH-1000XM5',
            price: 399.99,
            stock: 22,
            image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop',
            description: 'Auriculares gaming con cancelación de ruido'
        },
        {
            id: 10,
            name: 'Logitech G Pro X Mouse',
            price: 129.99,
            stock: 45,
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
            description: 'Mouse gamer profesional inalámbrico'
        }
    ];

    // EDITADO - Handle add to favorites
    const handleAddToFavorites = (product) => {
        addToFavorites(product);
    };

    // EDITADO - Get stock status color
    const getStockColor = (stock) => {
        if (stock > 30) return 'success';
        if (stock > 10) return 'warning';
        return 'error';
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* EDITADO - Gaming Page title */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ 
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    VideoJuegos y Consolas
                </Typography>
                <Typography variant="h6" sx={{ color: '#94a3b8' }}>
                    Encuentra los mejores juegos, consolas y accesorios
                </Typography>
            </Box>

            {/* EDITADO - Gaming Products grid */}
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card 
                            sx={{ 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column',
                                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                                border: '1px solid rgba(124, 58, 237, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    border: '1px solid #06b6d4',
                                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.2)'
                                }
                            }}
                        >
                            {/* EDITADO - Product image */}
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            
                            <CardContent sx={{ flexGrow: 1 }}>
                                {/* EDITADO - Product name */}
                                <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#f1f5f9' }}>
                                    {product.name}
                                </Typography>
                                
                                {/* EDITADO - Product description */}
                                <Typography variant="body2" sx={{ mb: 2, color: '#94a3b8' }}>
                                    {product.description}
                                </Typography>

                                {/* EDITADO - Stock indicator */}
                                <Box sx={{ mb: 1 }}>
                                    <Chip 
                                        label={`Stock: ${product.stock} unidades`}
                                        size="small"
                                        sx={{ 
                                            backgroundColor: product.stock > 30 ? 'rgba(6, 182, 212, 0.2)' : 
                                                         product.stock > 10 ? 'rgba(245, 158, 11, 0.2)' : 
                                                         'rgba(239, 68, 68, 0.2)',
                                            color: product.stock > 30 ? '#06b6d4' : 
                                                  product.stock > 10 ? '#f59e0b' : 
                                                  '#ef4444'
                                        }}
                                    />
                                </Box>

                                {/* EDITADO - Price display */}
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#06b6d4' }}>
                                    ${product.price.toFixed(2)}
                                </Typography>
                            </CardContent>

                            {/* EDITADO - Action buttons */}
                            <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                <Button 
                                    variant="contained" 
                                    sx={{
                                        background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                                        }
                                    }}
                                    startIcon={<ShoppingCartIcon />}
                                    size="small"
                                >
                                    Comprar
                                </Button>
                                
                                {/* EDITADO - Add to favorites button */}
                                <Button
                                    variant={isFavorite(product.id) ? "contained" : "outlined"}
                                    color={isFavorite(product.id) ? "error" : "primary"}
                                    onClick={() => handleAddToFavorites(product)}
                                    startIcon={isFavorite(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                    size="small"
                                >
                                    {isFavorite(product.id) ? 'Favorito' : 'Favoritos'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
