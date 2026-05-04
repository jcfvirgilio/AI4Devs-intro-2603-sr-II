## Why

Implementar un sistema de autenticación seguro para el proyecto AI4Devs26 que permita a los usuarios iniciar sesión de forma confiable y mantener sus sesiones activas. La autenticación es fundamental para proteger rutas privadas y personalizar la experiencia del usuario en la aplicación.

## What Changes

- Crear página de login en `/app/login/page.tsx` (Server Component)
- Implementar formulario de login en `/components/LoginForm.tsx` (Client Component)
- Crear API endpoint POST `/api/auth/login` para validación y generación de JWT
- Generar token JWT seguro y almacenarlo en cookie HTTP-only
- Validar credenciales contra Supabase Auth (mock inicial)
- Mostrar errores de validación en la UI
- Implementar estado de loading durante el request de autenticación

## Capabilities

### New Capabilities
- `user-auth`: Sistema de autenticación JWT con manejo seguro de tokens
- `login-ui`: Interfaz de usuario para el formulario de login con validación visual
- `auth-api`: Endpoint API para procesar credenciales y generar tokens JWT

### Modified Capabilities
- None

## Impact

- Estructura de archivos: `/app/login/page.tsx`, `/components/LoginForm.tsx`, `/app/api/auth/login/route.ts`
- Dependencias: JWT, Supabase client, cookies
- Seguridad: Implementación de cookies HTTP-only para almacenar tokens
- Separación de concerns: Server Components para lógica, Client Components para UI