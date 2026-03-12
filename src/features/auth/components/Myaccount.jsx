// Importamos React y el hook useState para manejar estados
import React, { useState } from "react";

// Componentes de Material UI que vamos a usar en el formulario
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Alert
} from "@mui/material";

// Iconos de Material UI
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

// Componente principal
export const Myaccount = () => {

  // Estado que guarda los valores del formulario
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Estado para mostrar o ocultar la contraseña
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Estado para errores
  const [errors, setErrors] = useState({});

  // Mensaje de registro exitoso
  const [success, setSuccess] = useState("");

  // Esta función se ejecuta cada vez que el usuario escribe en un input
  const handleChange = (e) => {

    const { name, value } = e.target;

    // Actualizamos el estado del formulario
    setForm({
      ...form,
      [name]: value
    });

  };

  // Validación sencilla del formulario
  const validateForm = () => {

    let newErrors = {};

    // Validar nombre
    if (form.name.trim() === "") {
      newErrors.name = "El nombre es obligatorio";
    }

    // Validar email
    if (!form.email.includes("@")) {
      newErrors.email = "El correo debe contener @";
    }

    // Validar contraseña
    if (form.password.length < 8) {
      newErrors.password = "La contraseña debe tener mínimo 8 caracteres";
    }

    // Confirmar contraseña
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    return newErrors;

  };

  // Esta función se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validateForm();

    // Si hay errores los mostramos
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    // Si todo está bien mostramos mensaje
    setSuccess("Registro realizado correctamente");

    // Limpiamos formulario
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    setErrors({});
  };

  return (

    // Contenedor principal
    <Container maxWidth="sm" sx={{ mt: 5 }}>

      <Paper sx={{ p: 4 }}>

        {/* Título */}
        <Typography variant="h4" align="center" gutterBottom>
          Registro de Usuario
        </Typography>

        {/* Mensaje de éxito */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {/* Formulario */}
        <Box component="form" onSubmit={handleSubmit}>

          {/* Campo nombre */}
          <TextField
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
          />

          {/* Campo correo */}
          <TextField
            label="Correo"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />

          {/* Campo contraseña */}
          <TextField
            label="Contraseña"
            name="password"
            type={showPass ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPass(!showPass)}>
                    {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {/* Botón enviar */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
          >
            Registrarse
          </Button>

        </Box>

      </Paper>

    </Container>

  );
};