# NYAN SSRL — Sitio Web (HTML + CSS + JS)

Sitio corporativo en varios páginas y diseño responsive, con imágenes WebP optimizadas, logo/favicons retina, galería, sección de actualidades y formulario de contacto vía Formspree.

## Estructura
```
/assets
  /css/styles.css
  /js/app.js
  /icons/logo-nyan-ssrl*.webp, favicon-*.png/webp
  /images/*.webp (galería y héroes)
  /media/ (colocar aquí los videos y música)
  /placeholders/ imagen-plantilla.psd, video-plantilla.ai
index.html, servicios.html, sobre-mi.html, objetivos.html, galeria.html, actualidades.html, contacto.html
site.webmanifest
```

## Personalización rápida
- **Formspree**: edita `contacto.html` y reemplaza `https://formspree.io/f/your-id` por tu endpoint real.
- **Logo**: sustituye los archivos en `assets/icons/` manteniendo los nombres. Se usan variantes WebP y PNG para favicons.
- **Imágenes**: reemplaza los `.webp` en `assets/images/` por tus fotos (recomendado 1600px de ancho, compresión WebP 80–90).
- **Colores**: ajusta variables en `assets/css/styles.css` (`--blue`, `--blue-dark`, `--gray`).
- **Galería**: añade nuevas imágenes WebP dentro de `assets/images/` y agrega etiquetas `<img>` en `galeria.html`.

## Video y música (2do ZIP)
Este paquete **no incluye** los videos ni la pista musical. Cuando los tengas:
- Colócalos en `assets/media/` como:
  - `hero-video.mp4` (video HD para el héroe)
  - `corporativa.mp3` (música instrumental corporativa, libre de derechos)
- El botón **Play** del héroe ya controla el audio si el archivo existe.
- Para el video de redes (1080×1080, 15s), guarda como `redes-15s.mp4` en `assets/media/`.

### Guion sugerido del video (15s)
- **Intro (0–2s)**: Logo sobre fondo azul corporativo (fade-in).
- **Texto clave (2–5s)**: “Gestión Humana – Seguridad Social – Nóminas – Capacitaciones” (transición suave).
- **Galería (5–13s)**: Secuencia de imágenes: capacitación TSS, planes de salud complementarios, administración y reportes TSS, fotos corporativas.
- **Cierre (13–15s)**: CTA con correo `niurkayan39@gmail.com` y Tel. `849-382-8325` + música subiendo.

## Publicación
### Netlify
1. Crea un nuevo sitio y arrastra esta carpeta al panel, o conecta tu repo.
2. Framework: **Ninguno**; Directorio de publicación: **/**.

### Vercel
1. Importa el repositorio.
2. Framework Preset: **Other**; Directorio de salida: **/**.

### GitHub Pages
1. Sube todo a un repositorio.
2. En **Settings > Pages**, selecciona rama `main` y carpeta `/root`.

## Buenas prácticas de rendimiento
- Formato **WebP** para imágenes (ya incluido).
- Atributo `loading="lazy"` en imágenes no críticas.
- CSS y JS únicos y minificados (puedes minificar más si lo deseas).
- Favicons de múltiples tamaños y `site.webmanifest` para mejor soporte.

---

**Contacto**  
Correo: `niurkayan39@gmail.com`  
Tel.: `849-382-8325`  
Dirección: Santo Domingo, R.D