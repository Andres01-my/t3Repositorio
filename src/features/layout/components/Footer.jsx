// EDITADO - Gaming Footer with video game theme
import React from 'react';
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    IconButton,
    Link,
    Divider,
    useTheme,
    Stack
} from '@mui/material';
// EDITADO - Import gaming social media icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Footer = () => {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ width: '100%', mt: 'auto' }}>
            {/* EDITADO - Gaming Main footer section */}
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#0f0f1a',
                    color: 'white',
                    pt: { xs: 6, md: 8 },
                    pb: { xs: 3, md: 4 },
                    borderTop: '2px solid',
                    borderImage: 'linear-gradient(90deg, #7c3aed, #06b6d4) 1'
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 4, md: 6 }}>
                        {/* EDITADO - Gaming Brand and description section */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <SportsEsportsIcon sx={{ fontSize: 40, mr: 1.5, color: '#06b6d4' }} />
                                <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: 2, color: '#7c3aed' }}>
                                    GAME ZONE
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 3, opacity: 0.85, lineHeight: 1.8 }}>
                                Tu tienda de confianza para VideoJuegos. Ofrecemos las mejores 
                                consolas, juegos y accesorios con garantía y servicio premium para gamers.
                            </Typography>
                            {/* EDITADO - Contact info */}
                            <Stack spacing={1.5}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <EmailIcon sx={{ fontSize: 18, color: '#06b6d4' }} />
                                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                        info@gamezone.com
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <PhoneIcon sx={{ fontSize: 18, color: '#06b6d4' }} />
                                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                        +57 300 123 4567
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <LocationOnIcon sx={{ fontSize: 18, color: '#06b6d4' }} />
                                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                        Medellin, Colombia
                                    </Typography>
                                    
                                </Box>
                            </Stack>
                        </Grid>

                        {/* EDITADO - Quick links section */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#06b6d4' }}>
                                Navegación
                            </Typography>
                            <Stack spacing={1.5}>
                                <Link 
                                    href="#/" 
                                    color="inherit" 
                                    underline="none"
                                    sx={{ 
                                        opacity: 0.85,
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Inicio
                                </Link>
                                <Link 
                                    href="https://github.com/Andres01-my/t3Repositorio" 
                                    color="inherit" 
                                    underline="none"
                                    sx={{ 
                                        opacity: 0.85,
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    
                                    GitHub
                                </Link>
                                <Link 
                                    color="inherit" 
                                    underline="none"
                                    sx={{ 
                                        opacity: 0.85,
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    VideoJuegos
                                </Link>
                                <Link 
                                    href="#/offers" 
                                    color="inherit" 
                                    underline="none"
                                    sx={{ 
                                        opacity: 0.85,
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Ofertas
                                </Link>
                                <Link 
                                    href="#/myaccount" 
                                    color="inherit" 
                                    underline="none"
                                    sx={{ 
                                        opacity: 0.85,
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Mi Cuenta
                                </Link>
                            </Stack>
                        </Grid>

                        {/* EDITADO - Services section */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#06b6d4' }}>
                                Servicios
                            </Typography>
                            <Stack spacing={1.5}>
                                <Link 
                                    href="#/mybuys" 
                                    color="inherit" 
                                    underline="none"
                                    sx={{ 
                                        opacity: 0.85,
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Mis Compras
                                </Link>
                                <Link 
                                    href="#/myfavorities" 
                                    color="inherit" 
                                    underline="none"
                                    sx={{ 
                                        opacity: 0.85,
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Favoritos
                                </Link>
                                <Typography 
                                    variant="body2"
                                    sx={{ 
                                        opacity: 0.85,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Soporte Gaming
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    sx={{ 
                                        opacity: 0.85,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Garantías
                                </Typography>
                            </Stack>
                        </Grid>

                        {/* EDITADO - Legal section */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#06b6d4' }}>
                                Legal
                            </Typography>
                            <Stack spacing={1.5}>
                                <Typography 
                                    variant="body2"
                                    sx={{ 
                                        opacity: 0.85,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Términos y Condiciones
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    sx={{ 
                                        opacity: 0.85,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Política de Privacidad
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    sx={{ 
                                        opacity: 0.85,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Política de Cookies
                                </Typography>
                                <Typography 
                                    variant="body2"
                                    sx={{ 
                                        opacity: 0.85,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': { 
                                            opacity: 1,
                                            color: '#06b6d4',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    Devoluciones
                                </Typography>
                            </Stack>
                        </Grid>

                        {/* EDITADO - Social media section */}
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#06b6d4' }}>
                                Síguenos en Redes
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 3, opacity: 0.85, lineHeight: 1.8 }}>
                                Únete a la comunidad gaming y descubre las últimas novedades
                            </Typography>
                            {/* EDITADO - Social media icons with gaming styling */}
                            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                                <IconButton 
                                    aria-label="Facebook"
                                    sx={{ 
                                        color: 'white',
                                        backgroundColor: 'rgba(124, 58, 237, 0.3)',
                                        width: 45,
                                        height: 45,
                                        '&:hover': {
                                            backgroundColor: '#1877F2',
                                            transform: 'translateY(-5px) scale(1.1)',
                                            boxShadow: '0 8px 20px rgba(24, 119, 242, 0.4)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton 
                                    aria-label="Twitter"
                                    sx={{ 
                                        color: 'white',
                                        backgroundColor: 'rgba(124, 58, 237, 0.3)',
                                        width: 45,
                                        height: 45,
                                        '&:hover': {
                                            backgroundColor: '#1DA1F2',
                                            transform: 'translateY(-5px) scale(1.1)',
                                            boxShadow: '0 8px 20px rgba(29, 161, 242, 0.4)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton 
                                    aria-label="Instagram"
                                    sx={{ 
                                        color: 'white',
                                        backgroundColor: 'rgba(124, 58, 237, 0.3)',
                                        width: 45,
                                        height: 45,
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                                            transform: 'translateY(-5px) scale(1.1)',
                                            boxShadow: '0 8px 20px rgba(228, 64, 95, 0.4)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton 
                                    aria-label="LinkedIn"
                                    sx={{ 
                                        color: 'white',
                                        backgroundColor: 'rgba(124, 58, 237, 0.3)',
                                        width: 45,
                                        height: 45,
                                        '&:hover': {
                                            backgroundColor: '#0A66C2',
                                            transform: 'translateY(-5px) scale(1.1)',
                                            boxShadow: '0 8px 20px rgba(10, 102, 194, 0.4)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton 
                                    aria-label="YouTube"
                                    sx={{ 
                                        color: 'white',
                                        backgroundColor: 'rgba(124, 58, 237, 0.3)',
                                        width: 45,
                                        height: 45,
                                        '&:hover': {
                                            backgroundColor: '#FF0000',
                                            transform: 'translateY(-5px) scale(1.1)',
                                            boxShadow: '0 8px 20px rgba(255, 0, 0, 0.4)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <YouTubeIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* EDITADO - Gaming divider with gradient */}
                    <Divider 
                        sx={{ 
                            my: 4, 
                            background: 'linear-gradient(90deg, transparent, #7c3aed, #06b6d4, #7c3aed, transparent)',
                            height: 2
                        }} 
                    />

                    {/* EDITADO - Copyright section with gaming styling */}
                    <Box 
                        sx={{ 
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2,
                            py: 2
                        }}
                    >
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                opacity: 0.7,
                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                textAlign: { xs: 'center', sm: 'left' }
                            }}
                        >
                            © {currentYear} GameZone - VideoJuegos y Consolas. Todos los derechos reservados.
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                opacity: 0.7,
                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                textAlign: { xs: 'center', sm: 'right' }
                            }}
                        >
                            Hecho para Gamers en Colombia 🎮
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};
