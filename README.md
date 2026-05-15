# 🎨 Spylt — Landing Page Inmersiva con GSAP

Una landing page visualmente inmersiva y responsiva construida con **Next.js**, **Tailwind CSS** y **GSAP**. Este proyecto es una demostración de capacidades avanzadas en animaciones de frontend, incluyendo efectos de scroll, parallax y transiciones cinemáticas.

---

## 👤 Desarrollador
**Cristian Escobar**
- 🔗 [LinkedIn](https://www.linkedin.com/in/crisescobaro)
- 🚀 Apasionado por crear experiencias web únicas y altamente interactivas.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15 (React 19)
- **Estilos:** Tailwind CSS 4
- **Animaciones:** GSAP (ScrollTrigger, ScrollSmoother, SplitText)
- **Lenguaje:** TypeScript
- **Responsividad:** react-responsive

---

## ✨ Características

- 🎯 **Animaciones Basadas en Scroll:** Orquestadas con GSAP `ScrollTrigger` para una narrativa visual fluida.
- 🪄 **Efectos Parallax y Pinning:** Transiciones que mantienen elementos fijos mientras el contenido fluye.
- 🔍 **Revelado con Clip-Path:** Uso de máscaras de recorte para transiciones de sección y efectos de texto premium.
- 🔁 **Orquestación de Timelines:** Secuencias de animación precisas y sincronizadas.
- ⚡ **Desplazamiento Suave:** Implementación de `ScrollSmoother` para una experiencia de navegación de lujo.
- 📱 **Totalmente Responsivo:** Adaptado meticulosamente para móviles, tablets y escritorio.
- 🌐 **Internacionalización:** Proyecto completamente localizado al español.

---

## 🚀 Cómo Iniciar el Proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/crisescobaro/Spylt-GSAP.git
cd Spylt-GSAP
```

### 2. Instalar dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego ejecuta:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🧠 Cómo Funciona el Proyecto

El proyecto utiliza una arquitectura moderna basada en componentes de Next.js y un motor de animaciones centralizado:

1.  **Arquitectura de Componentes:** Las secciones están divididas en `src/sections` (Hero, Benefit, Nutrition, etc.) para facilitar el mantenimiento y la escalabilidad.
2.  **Motor de Animación (GSAP):**
    *   Se utiliza el hook `useGSAP` para manejar el ciclo de vida de las animaciones dentro de React de forma segura.
    *   `ScrollTrigger` detecta la posición del scroll para activar animaciones específicas en cada sección.
    *   `ScrollSmoother` se inicializa en el layout principal para suavizar el desplazamiento global.
3.  **Estilos dinámicos:** Tailwind CSS se combina con animaciones de GSAP para manipular propiedades como `clip-path`, `opacity` y `transform` en tiempo real.
4.  **Carga Optimizada:** Se implementó un `Preloader` personalizado que espera a que los recursos pesados (como videos de fondo) estén listos antes de revelar la página, asegurando que las animaciones se ejecuten sin saltos (*jank-free*).

---

## 📸 Capturas de Pantalla

*(Puedes añadir aquí capturas de pantalla de las diferentes secciones del sitio)*

---

Copyright © 2025 Cristian Escobar - Todos los derechos reservados.