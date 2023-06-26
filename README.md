# Auntenticación y Autorización con JWT

Esta API proporciona endpoints para administrar usuarios, autenticación y autorización.

## Endpoints

### POST /usuarios

Crea un nuevo usuario.

**Ejemplo de solicitud:**

```http
POST /usuarios
Content-Type: application/json

{
  "email": "ejemplo@gmail.com",
  "password": "contrasena",
  "rol": "Full Stack Developer",
  "lenguage": "Ruby"
}
```

### GET /login

Inicia sesión y obtiene un token de acceso.

**Uso de JWT:**

```http
POST /login
Content-Type: application/json

{
  "email": "ejemplo@gmail.com",
  "password": "contraseña"
}
```

### GET /usuarios

Obtiene al usuario autenticado.

**Ejemplo de solicitud:**

```http
GET /usuarios
Authorization: Bearer <token-de-acceso>
```

El `<token-de-acceso>` se genera al momento de iniciar sesión.

