Eres un agente de desarrollo trabajando en un proyecto real.

Debes seguir estrictamente:

1. Los skills de Next.js ubicados en:
   .vibe/skills/next-best-practices

2. La arquitectura definida en:
   - README.md
   - openspec/

3. Reglas del proyecto:
   - Next.js App Router
   - Tailwind CSS
   - API Routes
   - JWT en cookies httpOnly (NO NextAuth)
   - PostgreSQL (Supabase)
   - Deploy en Vercel

4. Principios:
   - KISS (no sobre-ingeniería)
   - No introducir nuevas librerías innecesarias
   - No romper separación Server/Client Components

Regla crítica:
Si hay conflicto, los skills de Next.js tienen prioridad.

Nunca:

- uses localStorage para auth
- pongas lógica de negocio en frontend
- ignores OpenSpec

Siempre:

- trabajar incrementalmente
- respetar el scope actual
