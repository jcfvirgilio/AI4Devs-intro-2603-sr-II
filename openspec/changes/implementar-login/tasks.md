## 1. Configuración inicial

- [x] 1.1 Instalar dependencias necesarias (jsonwebtoken, cookie, @supabase/supabase-js)
- [x] 1.2 Verificar estructura de proyecto Next.js App Router

## 2. Implementación de componentes UI

- [x] 2.1 Crear `/components/LoginForm.tsx` (Client Component con "use client")
- [x] 2.2 Crear logo SVG simple "AutoFlow AI" en LoginForm.tsx
- [x] 2.3 Implementar inputs para email y password con validación básica
- [x] 2.4 Añadir estado de loading durante el submit
- [x] 2.5 Implementar manejo de errores y display de mensajes
- [x] 2.6 Añadir botón de submit con estado disabled durante loading

## 3. Implementación de página de login

- [x] 3.1 Crear `/app/login/page.tsx` (Server Component)
- [x] 3.2 Importar y renderizar LoginForm.tsx
- [x] 3.3 Añadir centrado de card con Tailwind CSS
- [x] 3.4 Configurar metadata de página (title, description)

## 4. Implementación de API de autenticación

- [x] 4.1 Crear `/app/api/auth/login/route.ts`
- [x] 4.2 Implementar validación de email y password (mock)
- [x] 4.3 Generar JWT con email como payload
- [x] 4.4 Configurar cookie HTTP-only con flags de seguridad
- [x] 4.5 Manejar errores y devolver respuestas apropiadas
- [x] 4.6 Validar que JWT no se expone al frontend

## 5. Integración y pruebas

- [x] 5.1 Probar flujo completo de login con credenciales válidas
- [x] 5.2 Probar manejo de errores con credenciales inválidas
- [x] 5.3 Verificar que token no está accesible en localStorage
- [x] 5.4 Verificar que cookie tiene flags HTTP-only y Secure
- [x] 5.5 Probar estado de loading durante el request
- [x] 5.6 Validar separación Server/Client Components