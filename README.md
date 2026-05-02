# 🚗 AutoFlow AI

Sistema de check-in inteligente para talleres mecánicos con capacidades de IA.

---

## 📌 Descripción del Proyecto

AutoFlow AI es una aplicación web que digitaliza el proceso de recepción de vehículos en talleres mecánicos. Permite capturar información del cliente, vehículo y evidencias, apoyándose en OCR e IA para reducir errores manuales y mejorar la eficiencia operativa.

El sistema está diseñado como un MVP enfocado en un flujo completo (E2E), priorizando simplicidad, escalabilidad futura y buenas prácticas de arquitectura.

---

## 🎯 Objetivo

- Reducir captura manual mediante OCR
- Centralizar información de recepción de vehículos
- Generar cotizaciones automáticas
- Crear documentos PDF profesionales
- Introducir capacidades básicas de IA desde la primera fase

---

## 🚀 Flujo Principal (E2E)

1. Login del usuario
2. Registro de check-in del vehículo
3. Captura de imágenes
4. OCR para detección de VIN/placa
5. Validación manual de datos
6. Registro de checklist de entrada
7. Generación de cotización
8. Generación de PDF

---

## 🧩 Alcance del MVP

### ✅ Must-Have

- Login básico con JWT
- Check-in digital de vehículo
- Captura de imágenes
- OCR con Google Vision API
- Edición manual de datos OCR
- Checklist de entrada
- Cotización con cálculo automático (IVA 16%)
- Generación de PDF
- Persistencia en PostgreSQL gestionado con Supabase

### 🟡 Should-Have

- Validación de VIN (regex)
- Búsqueda simple de servicios

---

## 👤 Usuarios

- Recepcionista de taller
- Personal administrativo

---

## 🏗️ Arquitectura

Arquitectura basada en capas:

- **Frontend:** Next.js (App Router)
- **Backend:** API Routes (Next.js)
- **Base de datos:** PostgreSQL
- **Autenticación:** JWT
- **OCR:** Google Vision API
- **IA:** Mistral / OpenCode

---

## 🗄️ Modelo de Datos

### VehicleCheckIn

- id
- clienteNombre
- telefono
- vin
- placa
- fotos
- checklist
- fecha

### Quote

- id
- checkinId
- items
- subtotal
- iva
- total

---

## 🔌 API

### POST /api/auth/login

Autenticación de usuario

### POST /api/checkin

Registro de check-in

### POST /api/ocr

Procesamiento OCR

### POST /api/quote

Generación de cotización

### GET /api/checkin/:id

Consulta de check-in

---

## 🧪 Testing

- Unit Testing: lógica de negocio (cálculo de cotización)
- Integration Testing: endpoints API
- E2E Testing: flujo completo (check-in → PDF)

---

## 🚀 Despliegue

- Plataforma: Vercel
- Base de datos: PostgreSQL (Supabase)
- Variables de entorno para:
  - DB
  - JWT
  - Google Vision API

---

## 🔐 Seguridad

- Validación server-side
- Sanitización de inputs
- Autenticación JWT
- Protección de rutas en backend
- No confiar en lógica del frontend

---

## 🧠 Uso de IA y herramientas de desarrollo asistido

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial para acelerar la construcción, mejorar la calidad del código y apoyar la toma de decisiones técnicas.

### 🧩 Herramientas utilizadas

- GitHub Copilot
  - Autocompletado de código
  - Generación de funciones y estructuras base

- OpenCode
  - Generación guiada de componentes
  - Iteración sobre lógica de negocio
  - Refinamiento de endpoints API

- Mistral AI
  - Apoyo en validaciones (ej. VIN)
  - Generación y mejora de prompts

- GitHub Spec Kit
  - Definición estructurada de requerimientos
  - Generación inicial de historias de usuario
  - Apoyo en diseño de arquitectura

---

### ⚙️ Estrategia de uso

Las herramientas de IA no se utilizaron de forma automática, sino guiada:

- Se definieron prompts específicos por módulo (producto, arquitectura, API, etc.)
- Se iteró sobre las respuestas para mejorar precisión
- Se validó manualmente cada resultado antes de integrarlo al sistema
- Se ajustó el código generado para cumplir con buenas prácticas y seguridad

---

### 📈 Beneficios observados

- Reducción del tiempo de desarrollo
- Mejora en la estructuración del código
- Mayor claridad en la definición del MVP
- Apoyo en decisiones técnicas

---

### ⚠️ Consideraciones

- El código generado por IA fue revisado y adaptado manualmente
- No se delegaron decisiones críticas sin validación humana
- Se priorizó simplicidad sobre complejidad innecesaria

---

## 📈 Escalabilidad futura

- Multi-sucursal
- Dashboard de reportes
- IA para diagnóstico automático
- Recomendación de servicios
- Migración a arquitectura desacoplada

---
