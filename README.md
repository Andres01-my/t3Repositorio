# GameZone - Tienda de VideoJuegos

E-commerce de video juegos y accesorios desarrollado con React + Vite + MUI.

## Jerarquía de Carpetas

```
t3_eshop/
├── src/
│   ├── App.jsx                    # Componente principal, providers y rutas
│   ├── main.jsx                   # Punto de entrada
│   ├── Routes.jsx                 # Definición de rutas (vacío)
│   │
│   ├── context/                   # Contextos de React (estado global)
│   │   ├── CartContext.jsx       # Carrito de compras
│   │   └── FavoritesContext.jsx  # Productos favoritos
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   └── components/        # Componentes de autenticación/cuenta
│   │   │       ├── Myaccount.jsx # Mi cuenta
│   │   │       ├── Mybuys.jsx    # Carrito de compras (mis compras)
│   │   │       └── Myfavorities.jsx # Mis favoritos
│   │   │
│   │   ├── layout/
│   │   │   └── components/        # Componentes de estructura
│   │   │       ├── Content.jsx   # Página de inicio
│   │   │       ├── Footer.jsx    # Pie de página
│   │   │       └── Header.jsx    # Navegación principal
│   │   │
│   │   └── views/
│   │       ├── components/
│   │       │   ├── Article.jsx   # Catálogo de productos
│   │       │   └── Offers.jsx     # Ofertas
│   │       └── hooks/
│   │           └── Usestate.jsx   # Hooks personalizados
│   │
│   ├── shared/
│   │   ├── App.css               # Estilos globales
│   │   └── index.css             # Estilos base
│   │
│   └── assets/
│       └── react.svg             # Recursos estáticos
│
├── public/                       # Archivos públicos estáticos
├── index.html                    # HTML entrada
├── package.json                  # Dependencias
└── vite.config.js               # Configuración Vite
```

## Funcionalidades de la Página

### Navegación
- **Header**: Logo, búsqueda, menú de navegación, iconos de favoritos y carrito
- **Footer**: Información de la empresa y enlaces

### Páginas/Vistas
- **/** (Content) - Inicio de la tienda
- **/article** (Article) - Catálogo de productos (videojuegos, consolas, accesorios)
- **/offers** (Offers) - Ofertas especiales
- **/myaccount** (Myaccount) - Cuenta del usuario
- **/mybuys** (Mybuys) - Carrito de compras
- **/myfavorities** (Myfavorities) - Lista de favoritos

### Características
- **Carrito de compras**: Agregar productos, modificar cantidades, eliminar, ver total
- **Favoritos**: Marcar productos como favoritos, visualizar lista
- **Tema oscuro**: Diseño gamer con gradientes violeta/cyan
- **Responsive**: Adaptable a móviles y escritorio

## Ejecutar el Proyecto

```bash
cd t3_eshop
npm install
npm run dev
```