// Importamos React
import React from "react";

// Hook para navegar entre páginas
import { useNavigate } from "react-router-dom";

// Componentes de Material UI
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box
} from "@mui/material";

// Iconos
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GamepadIcon from "@mui/icons-material/Gamepad";
import CasinoIcon from "@mui/icons-material/Casino";

// Componente principal de la página inicial
export const Content = () => {

  // Hook para navegar
  const navigate = useNavigate();

  // Lista de características de la tienda
  const features = [
    {
      icon: <GamepadIcon fontSize="large" sx={{ color: '#06b6d4' }} />,
      title: "Gran Variedad",
      description: "Consolas, juegos y accesorios de todas las marcas líderes."
    },
    {
      icon: <LocalShippingIcon fontSize="large" sx={{ color: '#06b6d4' }} />,
      title: "Envíos Rápidos",
      description: "Entrega digital inmediata y envío físico en 24-48 horas."
    },
    {
      icon: <VerifiedUserIcon fontSize="large" sx={{ color: '#06b6d4' }} />,
      title: "Compra Segura",
      description: "Productos originales con garantía oficial."
    },
    {
      icon: <SupportAgentIcon fontSize="large" sx={{ color: '#06b6d4' }} />,
      title: "Soporte 24/7",
      description: "Atención especializada para gamers."
    }
  ];

  return (

    <main>

      {/* EDITADO - Gaming Hero Section with gradient background */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.9) 0%, rgba(15, 15, 26, 0.95) 100%)',
          color: "white",
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Gaming pattern overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.5
          }}
        />

        <Container sx={{ position: 'relative', zIndex: 1 }}>

          {/* Gaming Icon */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <SportsEsportsIcon sx={{ fontSize: 80, color: '#06b6d4', mb: 2 }} />
          </Box>

          {/* Título */}
          <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
            Bienvenido a GAME ZONE
          </Typography>

          {/* Subtítulo */}
          <Typography align="center" sx={{ mb: 4, fontSize: '1.2rem', opacity: 0.9 }}>
            Tu destino número uno para VideoJuegos, Consolas y Accesorios
          </Typography>

          {/* Botones */}
          <Box sx={{ textAlign: "center" }}>

            <Button
              variant="contained"
              sx={{ 
                mr: 2,
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                color: '#0f0f1a',
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(6, 182, 212, 0.4)'
                }
              }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/article")}
            >
              Ver VideoJuegos
            </Button>

            <Button
              variant="outlined"
              sx={{ 
                color: "#06b6d4", 
                borderColor: "#06b6d4",
                px: 4,
                '&:hover': {
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  borderColor: '#22d3ee'
                }
              }}
              onClick={() => navigate("/offers")}
            >
              Ver Ofertas
            </Button>

          </Box>

        </Container>

      </Box>


      {/* Sección de características */}
      <Container sx={{ mt: 5, mb: 5 }}>

        <Typography variant="h4" align="center" sx={{ mb: 4, color: '#06b6d4', fontWeight: 'bold' }}>
          ¿Por qué elegir GameZone?
        </Typography>

        <Grid container spacing={3}>

          {features.map((item, index) => (

            <Grid item xs={12} sm={6} md={3} key={index}>

              <Card sx={{ 
                height: '100%', 
                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  border: '1px solid #06b6d4',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.2)'
                }
              }}>

                <CardContent sx={{ textAlign: "center" }}>

                  {/* Icono */}
                  <Box sx={{ mb: 2 }}>
                    {item.icon}
                  </Box>

                  {/* Título */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f1f5f9' }}>
                    {item.title}
                  </Typography>

                  {/* Descripción */}
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    {item.description}
                  </Typography>

                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>

                  <Button
                    size="small"
                    sx={{ color: '#06b6d4' }}
                    onClick={() => navigate("/article")}
                  >
                    Ver más
                  </Button>

                </CardActions>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </main>

  );
};