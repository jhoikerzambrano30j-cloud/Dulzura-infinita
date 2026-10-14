# 🍰 Dulzura Infinita — Sitio web

Sitio de una sola página para la repostería y dulcería **Dulzura Infinita**.
Construido como sitio **estático** (HTML + CSS + JavaScript vanilla, sin framework y sin
dependencias), pensado para ser **rápido, liviano y fácil de publicar en cualquier hosting**.

![Logo](logo-mark.png)

---

## 🚀 Cómo verlo

El sitio es 100% estático: **no necesita compilar nada**. Solo abre `index.html` en el navegador.

Para probarlo como si estuviera publicado (recomendado, porque usa rutas relativas):

```powershell
# Opción rápida con PowerShell (Windows)
# Crea un servidor local en http://localhost:8000
npx serve .          # si tienes Node
# o
python -m http.server 8000
```

> También puedes arrastrar `index.html` directo al navegador: funciona igual,
> ya que todo (fuentes, imágenes, logo) está dentro del proyecto.

---

## 📁 Estructura

**Todo está en la raíz, sin ninguna carpeta** (así se sube a git sin problemas,
sin importar cómo lo hagas).

```
dulzura infinita/
├── index.html                  # Página completa (todas las secciones)
├── styles.css                  # Todo el diseño (tokens + componentes)
├── main.js                     # Catálogo, carrito, WhatsApp, slider, lightbox
├── README.md
├── favicon.svg                 # Ícono de pestaña (monograma ∞ con degradado)
├── favicon-32.png              # Íconos e imagen para móviles
├── favicon-192.png
├── apple-touch-icon.png
├── logo-mark.png               # Logo: solo el monograma (fondo transparente)
├── logo-lockup.png             # Logo: monograma + rótulo "Dulzura Infinita"
├── fraunces-normal.woff2       # Tipografías auto-hospedadas
├── fraunces-italic.woff2       # (no se usa Google Fonts en runtime)
├── jost.woff2
├── great-vibes.woff2
├── robots.txt
├── sitemap.xml
├── site.webmanifest            # Metadatos para instalarlo como app
└── img-*.jpg                   # 57 fotos optimizadas en 2–3 tamaños
                                #   (450 / 900 / 1600 px de ancho)
```

Los nombres de las fotos siguen el patrón `img-<nombre>-<ancho>.jpg`,
por ejemplo `img-torta-chocolate-900.jpg`.

---

## ⚙️ Personalización — lo primero que debes cambiar

### 1. Número de WhatsApp y moneda
Abre **`main.js`** y edita el bloque de configuración (está al inicio del archivo):

```js
const SHOP = {
  name: 'Dulzura Infinita',
  whatsapp: '584120000000',   // ← tu número: código de país + número, SIN "+", espacios ni guiones
  currency: '$',              // ← símbolo de moneda
  deliveryNote: 'Delivery el mismo día (costo según zona).'
};
```

Ese número se usa en **todos** los botones "Pedir", en el carrito (que arma el mensaje
automáticamente), en el formulario de contacto y en los enlaces de teléfono.

### 2. Productos
En el mismo archivo, el arreglo `PRODUCTS` define el menú:

```js
{ id:'torta-chocolate', name:'Torta de Chocolate Belga', cat:'tortas',
  price:28, old:34, rate:4.9, badge:'Top ventas',
  desc:'Bizcocho húmedo de cacao con ganache de chocolate belga.',
  img:'torta-chocolate' }   // ↔ img-torta-chocolate-900.jpg
```

- `cat` debe ser una de las claves de `CATS` (define los filtros del menú).
- `old` (opcional) muestra un precio anterior tachado.
- `badge` (opcional) muestra una etiqueta: *Top ventas*, *Nuevo*, *Favorito*, etc.
- `img` es el **nombre del archivo** sin el prefijo `img-` ni el sufijo `-900.jpg`.

### 3. Testimonios y galería
También en `main.js`: los arreglos `TESTIMONIALS` y `GALLERY`.

### 4. Datos de contacto, dirección y redes
En **`index.html`**, busca y reemplaza:

- `+58 412-000-0000` (aparece en la barra superior, la sección de contacto y el footer).
- `Av. Principal, Local 12 · Ciudad`, horarios, `hola@dulzurainfinita.com`.
- Enlaces de Instagram / Facebook / TikTok (`https://instagram.com/dulzurainfinita`, etc.).

### 5. Textos legales / SEO
En el `<head>` de `index.html`: descripción, Open Graph y el JSON-LD (`Bakery`).
En el JSON-LD ajusta teléfono, dirección y `aggregateRating`.

---

## 🎨 Identidad de marca

La paleta y la tipografía se derivaron **directamente del logo original**
(monograma "DI" con degradado sobre fondo negro).

| Token | Color | Uso |
|---|---|---|
| `--gold` | `#FFC93C` | Inicio del degradado |
| `--orange` | `#FF9A3C` | Degradado |
| `--pink` | `#FF5C8A` | Degradado / acentos |
| `--magenta` | `#B03E87` | Acentos, textos secundarios |
| `--plum` | `#8E3C86` | Fin del degradado |
| `--bg` | `#0C0910` | Fondo oscuro principal |
| `--cream` | `#FFF9F4` | Fondo claro de secciones |

Degradado de marca: `--grad` (dorado → naranja → rosa → magenta → ciruela).

**Tipografías** (auto-hospedadas en la raíz: `fraunces-*.woff2`, `jost.woff2`,
`great-vibes.woff2`):

- **Fraunces** — títulos (serif elegante, ideal para repostería).
- **Jost** — textos e interfaz (sans geométrica, hace juego con el rótulo del logo).
- **Great Vibes** — detalles manuscritos ("El arte de lo…", firma).

Para cambiar cualquier color o radio de borde, edita las variables en `:root`
al inicio de `styles.css`.

---

## ✨ Qué incluye

- **Hero** con el logo, collage de fotos, degradados y micro-animaciones.
- **Menú interactivo**: filtros por categoría + "ver más", con precios y valoraciones.
- **Carrito de pedidos** (guarda en `localStorage`) que arma el mensaje y lo envía por **WhatsApp**.
- **Tortas personalizadas**, proceso "cómo funciona", **estadísticas animadas**.
- **Galería** en cuadrícula con **lightbox** (teclado: ← → Esc).
- **Testimonios** en slider automático y responsive.
- **FAQ** en acordeón, formulario de contacto y **newsletter**.
- **Buscador de sección activa** (scrollspy), botón "volver arriba" y avisos (toasts).
- **Diseño responsive** y respeto a `prefers-reduced-motion`.

## 🧠 Rendimiento y buenas prácticas

- Sin frameworks ni CDNs: **cero dependencias externas** en tiempo de ejecución.
- Imágenes con `loading="lazy"`, `decoding="async"`, `width/height` y `srcset` (evita saltos de layout).
- Imagen del hero con `fetchpriority="high"` y `preload`.
- Tipografías auto-hospedadas con `preload` + `font-display: swap`.
- CSS y JS ligeros; animaciones con `transform`/`opacity` (aceleradas por GPU).
- HTML semántico + ARIA, navegación por teclado, foco visible y enlace "saltar al contenido".
- SEO: metadatos, Open Graph/Twitter, `canonical`, `robots.txt`, `sitemap.xml` y datos estructurados `Bakery`.
- Degradación elegante: si JavaScript falla, **todo el contenido sigue visible**.

---

## 📝 Notas sobre las imágenes

Las fotos de productos son de **banco de imágenes libres** (Wikimedia Commons,
licencias Creative Commons / dominio público) y fueron **redimensionadas y comprimidas**
localmente. Están listas para **reemplazarse por las fotos reales de la tienda**:
conserva los nombres (`img-nombre-450.jpg`, `img-nombre-900.jpg`,
`img-nombre-1600.jpg`) y todo seguirá funcionando.

- Logo: se procesó el archivo original para **quitar el fondo negro** y obtener
  `logo-mark.png` (monograma) y `logo-lockup.png` (logo + rótulo), además de los íconos.
- Si consigues el logo en **SVG o PNG transparente original**, reemplaza esos
  archivos y la calidad será aún mejor.

---

## 🌐 Publicar

Por ser estático, puedes subirlo tal cual a:

- **Netlify / Vercel / Cloudflare Pages** (arrastra la carpeta o conecta el repo).
- **GitHub Pages** (rama `main`, carpeta raíz).
- **Cualquier hosting tradicional** subiendo los archivos por FTP.

Antes de publicar, recuerda actualizar el dominio en `canonical`, `og:url`,
`robots.txt` y `sitemap.xml`.

### Subir a Git

```bash
git init
git add .
git commit -m "Sitio web Dulzura Infinita"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

> `git add .` incluye **todos** los archivos. (Dato: git sí versiona carpetas, así que
> si algún día las quieres usar, se suben sin problema. Este proyecto va sin carpetas
> para que sea imposible que se pierda algo.)

---

Hecho a mano, como nuestros postres. 🧁
