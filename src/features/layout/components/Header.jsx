// EDITADO - Gaming Header with video game theme
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useFavorites } from '../../../context/FavoritesContext';
// MUI
import { 
    AppBar, 
    Toolbar, 
    Button, 
    Typography, 
    Box,
    TextField,
    InputAdornment,
    Badge,
    IconButton,
    Container,
    useTheme,
    alpha,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    useMediaQuery
} from '@mui/material';
// EDITADO - Import gaming icons
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const Header = () => {
    const theme = useTheme();
    // EDITADO - Get favorites count
    const { favorites } = useFavorites();
    
    // EDITADO - Responsive breakpoint
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    // EDITADO - Mobile menu state
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // EDITADO - Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // EDITADO - Menu items for mobile drawer
    const menuItems = [
        { text: 'Inicio', path: '/', icon: <HomeIcon /> },
        { text: 'Artículos', path: '/article', icon: <InventoryIcon /> },
        { text: 'Ofertas', path: '/offers', icon: <LocalOfferIcon /> },
        { text: 'Mi Cuenta', path: '/myaccount', icon: <PersonIcon /> },
        { text: 'Mis Compras', path: '/mybuys', icon: <ShoppingBagIcon /> },
        { text: 'Mis Favoritos', path: '/myfavorities', icon: <FavoriteIcon /> },
    ];

    return (
        <header>
            {/* EDITADO - Gaming AppBar with gradient and glow effect */}
            <AppBar 
                position='sticky' 
                sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, #06b6d4 100%)`,
                    boxShadow: '0 4px 30px rgba(124, 58, 237, 0.3)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ py: 1 }}>
                        {/* EDITADO - Mobile menu button */}
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={toggleMobileMenu}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        {/* EDITADO - Gaming Logo and brand section */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 'auto', md: 4 } }}>
                            <SportsEsportsIcon sx={{ fontSize: { xs: 30, md: 40 }, mr: 1, color: '#06b6d4' }} />
                            <Box>
                                <Typography 
                                    variant='h5' 
                                    sx={{ 
                                        fontWeight: 'bold',
                                        color: 'white',
                                        letterSpacing: 2,
                                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                                        textShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                                    }}
                                >
                                    GAME ZONE
                                </Typography>
                                {!isMobile && (
                                    <Typography 
                                        variant='caption' 
                                        sx={{ 
                                            color: '#06b6d4',
                                            fontSize: '0.7rem',
                                            letterSpacing: 1
                                        }}
                                    >
                                        Tu tienda de VideoJuegos
                                    </Typography>
                                )}
                            </Box>
                        </Box>

                        {/* EDITADO - Desktop Navigation buttons */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
                                <Button 
                                    variant="text" 
                                    component={NavLink} 
                                    to='/'
                                    sx={{
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: alpha('#06b6d4', 0.2),
                                            color: '#06b6d4'
                                        },
                                        '&.active': {
                                            backgroundColor: alpha('#06b6d4', 0.3),
                                            color: '#06b6d4',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    Inicio
                                </Button>
                                <Button 
                                    variant="text" 
                                    component={NavLink} 
                                    to='/article'
                                    sx={{
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: alpha('#06b6d4', 0.2),
                                            color: '#06b6d4'
                                        },
                                        '&.active': {
                                            backgroundColor: alpha('#06b6d4', 0.3),
                                            color: '#06b6d4',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    VideoJuegos
                                </Button>
                                <Button 
                                    variant="text" 
                                    component={NavLink} 
                                    to='/offers'
                                    sx={{
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: alpha('#06b6d4', 0.2),
                                            color: '#06b6d4'
                                        },
                                        '&.active': {
                                            backgroundColor: alpha('#06b6d4', 0.3),
                                            color: '#06b6d4',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    Ofertas
                                </Button>
                            </Box>
                        )}

                        {/* EDITADO - Search bar (hidden on mobile) */}
                        {!isMobile && (
                            <TextField
                                placeholder='Buscar juegos...'
                                size="small"
                                sx={{
                                    mr: 2,
                                    width: 250,
                                    backgroundColor: alpha('#fff', 0.1),
                                    borderRadius: 1,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        '& fieldset': {
                                            borderColor: alpha('#06b6d4', 0.3),
                                        },
                                        '&:hover fieldset': {
                                            borderColor: alpha('#06b6d4', 0.6),
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#06b6d4',
                                        },
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: alpha('#fff', 0.7),
                                        opacity: 1
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: '#06b6d4' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}

                        {/* EDITADO - Action icons */}
                        <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 } }}>
                            {/* EDITADO - Favorites icon with badge */}
                            <IconButton 
                                component={NavLink} 
                                to='/myfavorities'
                                sx={{ 
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: alpha('#06b6d4', 0.2),
                                        color: '#06b6d4'
                                    }
                                }}
                            >
                                <Badge badgeContent={favorites.length} sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: '#06b6d4',
                                        color: '#0f0f1a'
                                    }
                                }}>
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>

                            {/* EDITADO - Shopping cart icon */}
                            <IconButton 
                                component={NavLink} 
                                to='/mybuys'
                                sx={{ 
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: alpha('#06b6d4', 0.2),
                                        color: '#06b6d4'
                                    }
                                }}
                            >
                                <ShoppingCartIcon />
                            </IconButton>

                            {/* EDITADO - Account icon */}
                            <IconButton 
                                component={NavLink} 
                                to='/myaccount'
                                sx={{ 
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: alpha('#06b6d4', 0.2),
                                        color: '#06b6d4'
                                    }
                                }}
                            >
                                <PersonIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>

                    {/* EDITADO - Mobile search bar (below toolbar) */}
                    {isMobile && (
                        <Box sx={{ pb: 2, px: 2 }}>
                            <TextField
                                placeholder='Buscar juegos...'
                                size="small"
                                fullWidth
                                sx={{
                                    backgroundColor: alpha('#fff', 0.1),
                                    borderRadius: 1,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        '& fieldset': {
                                            borderColor: alpha('#06b6d4', 0.3),
                                        },
                                        '&:hover fieldset': {
                                            borderColor: alpha('#06b6d4', 0.6),
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#06b6d4',
                                        },
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: alpha('#fff', 0.7),
                                        opacity: 1
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: '#06b6d4' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    )}
                </Container>
            </AppBar>

            {/* EDITADO - Mobile Drawer Menu */}
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={toggleMobileMenu}
            >
                <Box
                    sx={{ width: 280 }}
                    role="presentation"
                    onClick={toggleMobileMenu}
                >
                    {/* EDITADO - Gaming Drawer header */}
                    <Box 
                        sx={{ 
                            p: 3, 
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #06b6d4 100%)`,
                            color: 'white'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <SportsEsportsIcon sx={{ fontSize: 40, mr: 1 }} />
                            <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
                                GAME ZONE
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            Tu tienda de VideoJuegos
                        </Typography>
                    </Box>

                    <Divider />

                    {/* EDITADO - Menu items */}
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={NavLink} to={item.path}>
                                    <ListItemIcon sx={{ color: '#06b6d4' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </header>
    );
};
