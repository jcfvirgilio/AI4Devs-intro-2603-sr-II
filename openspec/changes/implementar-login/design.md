## Context

El proyecto AI4Devs26 requiere un sistema de autenticación para proteger rutas privadas y personalizar la experiencia del usuario. Actualmente no existe ningún mecanismo de autenticación implementado. El stack actual incluye Next.js (App Router), Supabase como base de datos, y se ha configurado Vercel para despliegue.

## Goals / Non-Goals

**Goals:**
- Implementar flujo de login seguro con JWT
- Validar credenciales contra Supabase Auth
- Almacenar token JWT en cookies HTTP-only
- Mantener separación entre Server y Client Components
- Proporcionar feedback visual durante el proceso de autenticación
- Seguir las mejores prácticas de seguridad para manejo de tokens

**Non-Goals:**
- Implementar registro de usuarios (solo login)
- Manejar recuperación de contraseña
- Implementar roles y permisos
- Manejar refresh tokens (solo token de sesión)
- Validar contra base de datos propia (usar Supabase Auth)

## Decisions

1. **Autenticación con Supabase Auth vs JWT puro**
   - Decisión: Usar Supabase Auth para validación inicial de credenciales
   - Razón: Supabase ya maneja la seguridad de credenciales y provee métodos integrados. El JWT se genera internamente para manejo de sesiones en nuestra aplicación.
   - Alternativa considerada: Validar credenciales directamente contra nuestra base de datos (rechazado por seguridad)

2. **Almacenamiento de token**
   - Decisión: Usar cookies HTTP-only en lugar de localStorage
   - Razón: Las cookies HTTP-only son inaccesibles desde JavaScript, previniendo ataques XSS. Supabase Auth ya usa este patrón por defecto.
   - Alternativa considerada: Almacenar en sessionStorage (rechazado por vulnerabilidad a XSS)

3. **Separación Server/Client Components**
   - Decisión: `/app/login/page.tsx` como Server Component y `/components/LoginForm.tsx` como Client Component
   - Razón: El Server Component maneja la lógica de negocio (validación, generación de JWT) mientras el Client Component solo maneja la UI y el fetch.
   - Alternativa considerada: Todo en un solo componente (rechazado por violar separación de concerns)

4. **Estado de loading y errores**
   - Decisión: Mostrar estado de loading durante el request y errores básicos en la UI
   - Razón: Proporcionar feedback al usuario sobre el estado de la operación y errores claros en caso de fallo.
   - Alternativa considerada: No mostrar estado de loading (rechazado por mala experiencia de usuario)

5. **Validación de credenciales**
   - Decisión: Validar contra Supabase Auth primero, luego generar JWT interno
   - Razón: Aprovechar la infraestructura de seguridad de Supabase mientras mantenemos nuestro propio sistema de tokens para sesiones.
   - Alternativa considerada: Validar contra API propia (rechazado por complejidad inicial)

## Risks / Trade-offs

- [Token JWT almacenado en cookie HTTP-only] → Riesgo de CSRF mitigado con SameSite=Lax y tokens CSRF
- [Dependencia de Supabase Auth] → Si Supabase falla, el login no funcionará (requiere monitoreo)
- [Mock inicial de validación] → En producción se reemplazará por validación real contra Supabase
- [No implementar refresh tokens] → Los usuarios tendrán que volver a loguearse después de que expire el token (trade-off por simplicidad)