import React from 'react';
import { useCart } from '../../../context/CartContext';
import { 
    Container, 
    Typography, 
    Box, 
    Card, 
    CardMedia, 
    CardContent,
    CardActions,
    Button,
    IconButton,
    Grid,
    Divider,
    TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Mybuys = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

    if (cart.length === 0) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <ShoppingCartIcon sx={{ fontSize: 80, color: '#94a3b8', mb: 2 }} />
                    <Typography variant="h5" sx={{ color: '#94a3b8', mb: 2 }}>
                        Tu carrito está vacío
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748b' }}>
                        ¡Agrega algunos productos para empezar a comprar!
                    </Typography>
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h1" sx={{ 
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Carrito de Compras
                </Typography>
                <Typography variant="h6" sx={{ color: '#94a3b8' }}>
                    {getCartCount()} {getCartCount() === 1 ? 'producto' : 'productos'} en tu carrito
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    {cart.map((item) => (
                        <Card key={item.id} sx={{ 
                            mb: 2, 
                            backgroundColor: 'rgba(26, 26, 46, 0.8)',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' }
                        }}>
                            <CardMedia
                                component="img"
                                sx={{ width: { xs: '100%', sm: 150 }, height: { xs: 150, sm: 150 } }}
                                image={item.image}
                                alt={item.name}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <CardContent>
                                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#f1f5f9' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>
                                        {item.description}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#06b6d4', fontWeight: 'bold' }}>
                                        ${item.price.toFixed(2)}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <IconButton 
                                            size="small" 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            sx={{ 
                                                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                                                color: '#06b6d4',
                                                '&:hover': { backgroundColor: 'rgba(124, 58, 237, 0.4)' }
                                            }}
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <TextField
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                            size="small"
                                            type="number"
                                            inputProps={{ min: 1 }}
                                            sx={{ 
                                                width: 60,
                                                '& .MuiOutlinedInput-root': {
                                                    color: '#f1f5f9',
                                                    '& fieldset': { borderColor: 'rgba(124, 58, 237, 0.3)' }
                                                }
                                            }}
                                        />
                                        <IconButton 
                                            size="small" 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            sx={{ 
                                                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                                                color: '#06b6d4',
                                                '&:hover': { backgroundColor: 'rgba(124, 58, 237, 0.4)' }
                                            }}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    ))}
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ 
                        backgroundColor: 'rgba(26, 26, 46, 0.8)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        position: 'sticky',
                        top: 100
                    }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f1f5f9', mb: 2 }}>
                                Resumen del Pedido
                            </Typography>
                            <Divider sx={{ mb: 2, borderColor: 'rgba(124, 58, 237, 0.3)' }} />
                            
                            {cart.map((item) => (
                                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                        {item.name} x{item.quantity}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#f1f5f9' }}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </Typography>
                                </Box>
                            ))}
                            
                            <Divider sx={{ my: 2, borderColor: 'rgba(124, 58, 237, 0.3)' }} />
                            
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6" sx={{ color: '#94a3b8' }}>Total:</Typography>
                                <Typography variant="h5" sx={{ color: '#06b6d4', fontWeight: 'bold' }}>
                                    ${getCartTotal().toFixed(2)}
                                </Typography>
                            </Box>
                            
                            <Button 
                                variant="contained" 
                                fullWidth
                                sx={{
                                    background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                                    },
                                    py: 1.5,
                                    fontSize: '1.1rem'
                                }}
                            >
                                Finalizar Compra
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};