# 🧠 Skills — AutoFlow AI

## 1. Vehicle Check-in Processing

**Descripción:**
Gestiona el registro completo de entrada de un vehículo al taller.

**Inputs:**

- Datos del cliente
- Datos del vehículo (VIN, placa)
- Fotos del vehículo
- Checklist de condiciones

**Outputs:**

- Registro de check-in persistido

**Reglas:**

- Permitir edición manual de datos
- Registrar fecha, dispositivo y ubicación
- No bloquear flujo por errores menores

---

## 2. OCR Processing

**Descripción:**
Extrae texto desde imágenes capturadas (VIN y placas).

**Inputs:**

- Imagen (archivo o cámara)

**Outputs:**

- Texto detectado
- Texto bruto OCR
- Nivel de confianza

**Reglas:**

- Permitir corrección manual
- No depender al 100% del OCR
- Manejar errores y fallback

---

## 3. VIN Validation

**Descripción:**
Valida el formato del VIN detectado o ingresado.

**Inputs:**

- VIN (string)

**Outputs:**

- válido / inválido

**Reglas:**

- Usar validación por formato (regex)
- No bloquear el guardado, solo advertir

---

## 4. Checklist Management

**Descripción:**
Permite registrar el estado del vehículo al momento de ingreso.

**Inputs:**

- Lista de ítems (daños, accesorios, condiciones)

**Outputs:**

- Checklist estructurado

**Reglas:**

- Permitir marcar estado
- Asociar con fotos si aplica

---

## 5. Quote Calculation

**Descripción:**
Calcula automáticamente los costos de servicios o refacciones.

**Inputs:**

- Lista de items (precio, cantidad)

**Outputs:**

- Subtotal
- IVA (16%)
- Total

**Reglas:**

- IVA fijo del 16%
- Precisión en cálculos
- Evitar inconsistencias

---

## 6. PDF Generation

**Descripción:**
Genera un documento PDF profesional de la cotización.

**Inputs:**

- Datos del check-in
- Datos de cotización

**Outputs:**

- Archivo PDF descargable o compartible

**Reglas:**

- Formato claro y legible
- Preparado para cliente final

---

## 7. Authentication

**Descripción:**
Gestiona el acceso de usuarios al sistema.

**Inputs:**

- Usuario
- Contraseña

**Outputs:**

- Token JWT

**Reglas:**

- Validación en backend
- Protección de rutas
- Manejo de sesión

---

## 8. Image Management

**Descripción:**
Gestiona la carga y almacenamiento de imágenes.

**Inputs:**

- Fotos capturadas o subidas

**Outputs:**

- URLs o referencias almacenadas

**Reglas:**

- Soporte móvil (cámara)
- Optimización básica de imágenes

---

## 9. Search (Basic)

**Descripción:**
Permite buscar servicios o refacciones.

**Inputs:**

- Texto parcial

**Outputs:**

- Lista de resultados

**Reglas:**

- Respuesta rápida
- Limitar resultados
- Activación con pocos caracteres

---
