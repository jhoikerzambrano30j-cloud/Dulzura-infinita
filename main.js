/* ==========================================================================
   DULZURA INFINITA — main.js
   Sin dependencias. Todo en vanilla JS.
   --------------------------------------------------------------------------
   ⚙️  CONFIGURA AQUÍ TUS DATOS (número de WhatsApp, moneda, etc.)
   ========================================================================== */
const SHOP = {
  name: 'Dulzura Infinita',
  // 👇 Cambia por tu número real (código de país + número, SIN +, espacios ni guiones)
  whatsapp: '584120000000',
  currency: '$',
  deliveryNote: 'Delivery el mismo día (costo según zona).'
};

/* --------------------------------------------------------------------------
   1. Catálogo de productos
   -------------------------------------------------------------------------- */
const CATS = {
  tortas: 'Tortas',
  cupcakes: 'Cupcakes',
  postres: 'Postres',
  chocolates: 'Chocolates',
  galletas: 'Galletas',
  panaderia: 'Panadería',
  helados: 'Helados'
};

const PRODUCTS = [
  { id:'torta-chocolate',  name:'Torta de Chocolate Belga',  cat:'tortas',    price:28, old:34, rate:4.9, badge:'Top ventas',
    desc:'Bizcocho húmedo de cacao con ganache de chocolate belga.', img:'torta-chocolate' },
  { id:'cupcakes',         name:'Cupcakes Deluxe (x6)',       cat:'cupcakes',  price:14, rate:4.8,
    desc:'Seis cupcakes esponjosos con buttercream y topper decorado.', img:'cupcakes', badge:'Favorito' },
  { id:'cheesecake',       name:'Cheesecake Cremoso',         cat:'postres',   price:22, rate:4.9,
    desc:'Textura sedosa con base de galleta y toque de frutos rojos.', img:'cheesecake' },
  { id:'macarons',         name:'Macarons Franceses (x12)',   cat:'postres',   price:18, rate:5.0, badge:'Nuevo',
    desc:'Doce macarons crujientes por fuera, cremosos por dentro.', img:'macarons' },
  { id:'trufas',           name:'Trufas de Chocolate (x9)',   cat:'chocolates',price:12, rate:4.9,
    desc:'Selección de bombones y trufas rellenas, hechos a mano.', img:'trufas' },
  { id:'torta-fresas',     name:'Torta de Fresas y Crema',    cat:'tortas',    price:26, rate:4.8,
    desc:'Capas de bizcocho, crema chantilly y fresas frescas.', img:'torta-fresas' },
  { id:'brownie',          name:'Brownie Fudge',              cat:'postres',   price:8, rate:4.7,
    desc:'Denso, húmedo y con trozos de nuez. Puro placer.', img:'brownie' },
  { id:'tarta-limon',      name:'Tarta de Limón Merengada',   cat:'postres',   price:24, rate:4.9,
    desc:'Base crocante, crema de limón y merengue tostado.', img:'tarta-limon' },
  { id:'torta-black-forest',name:'Torta Black Forest',        cat:'tortas',    price:30, rate:4.9, badge:'Clásico',
    desc:'Chocolate, cerezas y crema: el clásico que nunca falla.', img:'torta-black-forest' },
  { id:'milhojas',         name:'Milhojas de Crema',          cat:'postres',   price:9, rate:4.7,
    desc:'Hojaldre crujiente intercalado con crema pastelera.', img:'milhojas' },
  { id:'galletas',         name:'Galletas Artesanales (x6)',  cat:'galletas',  price:7, rate:4.8,
    desc:'Recién horneadas, con chips de chocolate y borde dorado.', img:'galletas' },
  { id:'galletas-oreo',    name:'Galletas de Chocolate Rellenas',cat:'galletas',price:6, rate:4.6,
    desc:'Doble galleta de cacao con relleno cremoso.', img:'galletas-oreo' },
  { id:'donuts',           name:'Donas Glaseadas (x4)',       cat:'panaderia', price:8, rate:4.7,
    desc:'Cuatro donas esponjosas con glaseado de frutas.', img:'donuts' },
  { id:'croissant',        name:'Croissants de Mantequilla (x3)',cat:'panaderia',price:6, rate:4.9,
    desc:'Hojaldre francés de mantequilla, crujiente y dorado.', img:'croissant' },
  { id:'waffles',          name:'Waffles con Fresas',         cat:'panaderia', price:10, rate:4.8,
    desc:'Waffles dorados, fresas frescas y azúcar en polvo.', img:'waffles' },
  { id:'churros',          name:'Churros con Chocolate (x5)', cat:'panaderia', price:7, rate:4.8,
    desc:'Cinco churros crujientes con salsa de chocolate.', img:'churros' },
  { id:'cinnamon-roll',    name:'Cinnamon Rolls (x4)',        cat:'panaderia', price:9, rate:4.8,
    desc:'Rollos de canela tibios con glaseado de vainilla.', img:'cinnamon-roll' },
  { id:'helado',           name:'Helado Artesanal',           cat:'helados',   price:5, rate:4.9,
    desc:'Cremoso, natural y hecho en casa. Pregunta por sabores.', img:'helado' },
  { id:'torta-zanahoria',  name:'Torta de Zanahoria',         cat:'tortas',    price:20, rate:4.7,
    desc:'Húmeda y especiada, con frosting de queso crema.', img:'torta-zanahoria' },
  { id:'postre-vasito',    name:'Postre en Vaso',             cat:'postres',   price:5, rate:4.8,
    desc:'Capas de crema, fruta y galleta en porción individual.', img:'postre-vasito' },
  { id:'caramelos',        name:'Gomitas y Caramelos (100g)', cat:'chocolates',price:4, rate:4.6,
    desc:'Surtido de gomitas de frutas y caramelos masticables.', img:'caramelos' },
  { id:'postres-surtidos', name:'Surtido de Postres',         cat:'postres',   price:15, rate:4.9, badge:'Para compartir',
    desc:'Selección variada de nuestros mejores postres del día.', img:'postres-surtidos' },
  { id:'torta-personalizada',name:'Torta Personalizada',      cat:'tortas',    price:45, rate:5.0, badge:'A tu medida',
    desc:'Diseñada contigo: sabores, colores y decoración temática.', img:'torta-personalizada' }
];

const GALLERY = [
  { img:'vitrina',           cap:'La vitrina del día',        ratio:'4/3' },
  { img:'macarons',          cap:'Macarons franceses',        ratio:'1/1' },
  { img:'torta-personalizada',cap:'Tortas a tu medida',       ratio:'3/4' },
  { img:'postres-surtidos',  cap:'Surtido de postres',        ratio:'4/3' },
  { img:'cupcakes',          cap:'Cupcakes decorados',        ratio:'1/1' },
  { img:'trufas',            cap:'Chocolates y trufas',       ratio:'4/3' },
  { img:'torta-fresas',      cap:'Torta de fresas',           ratio:'3/4' },
  { img:'croissant',         cap:'Panadería recién hecha',    ratio:'4/3' },
  { img:'torta-zanahoria',   cap:'Torta de zanahoria',        ratio:'1/1' },
  { img:'churros',           cap:'Churros con chocolate',     ratio:'4/3' },
  { img:'donuts',            cap:'Donas glaseadas',           ratio:'1/1' },
  { img:'helado',            cap:'Helado artesanal',          ratio:'3/4' }
];

const TESTIMONIALS = [
  { n:'Andrea P.', t:'La torta de chocolate fue el éxito de la fiesta. ¡Se acabó en minutos! Súper húmeda y nada empalagosa.', r:5, w:'Cumpleaños de mi hija' },
  { n:'Luis M.',   t:'Pedí cupcakes para la oficina y todos preguntaron dónde los compré. Atención impecable por WhatsApp.', r:5, w:'Pedido corporativo' },
  { n:'Gabriela R.',t:'Me diseñaron la torta de mi boda tal cual la imaginé. Los acabados, el sabor… perfecto. ¡Gracias!', r:5, w:'Boda' },
  { n:'Carlos D.', t:'Las trufas son otro nivel. Se nota que usan chocolate de verdad. Ya soy cliente fijo.', r:5, w:'Cliente frecuente' },
  { n:'María F.',  t:'El cheesecake es lo mejor que he probado en la ciudad. Cremoso y con ese toque justo de dulce.', r:5, w:'Postres' },
  { n:'José A.',   t:'Pedí una torta para el bautizo con poco tiempo y me la entregaron puntual. Muy recomendados.', r:5, w:'Bautizo' }
];

/* --------------------------------------------------------------------------
   2. Helpers
   -------------------------------------------------------------------------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const money = n => SHOP.currency + n.toFixed(2);
const imgSrc = (name, w) => `img-${name}-${w}.jpg`;
const imgSet = name => `${imgSrc(name,450)} 450w, ${imgSrc(name,900)} 900w`;
const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function toast(msg){
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('is-show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('is-show'), 2600);
}

function waLink(msg){
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/* --------------------------------------------------------------------------
   3. Productos: render + filtros + cargar más
   -------------------------------------------------------------------------- */
const productsEl = $('#products');
const loadMoreBtn = $('#loadMore');
const PAGE = 8;
let activeFilter = 'all';
let visibleCount = PAGE;

function cardHTML(p){
  const badge = p.badge ? `<span class="card__badge${p.cat === 'chocolates' ? ' card__badge--ghost' : ''}">${esc(p.badge)}</span>` : '';
  const old = p.old ? `<s>${money(p.old)}</s>` : '';
  return `
  <article class="card" data-cat="${p.cat}" data-id="${p.id}">
    <div class="card__media">
      <img src="${imgSrc(p.img,450)}" srcset="${imgSet(p.img)}"
           sizes="(max-width:720px) 88vw, (max-width:1200px) 44vw, 22vw"
           alt="${esc(p.name)}" width="900" height="675" loading="lazy" decoding="async">
      ${badge}
      <span class="card__rate" aria-label="Calificación ${p.rate} de 5">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9z"/></svg>
        ${p.rate.toFixed(1)}
      </span>
    </div>
    <div class="card__body">
      <span class="card__cat">${CATS[p.cat]}</span>
      <h3 class="card__title">${esc(p.name)}</h3>
      <p class="card__desc">${esc(p.desc)}</p>
      <div class="card__foot">
        <span class="card__price"><b>${money(p.price)}</b>${old}</span>
        <button class="card__add" type="button" data-add="${p.id}"
                aria-label="Agregar ${esc(p.name)} al pedido">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>
  </article>`;
}

function renderProducts(){
  if (!productsEl) return;
  productsEl.innerHTML = PRODUCTS.map(cardHTML).join('');
  applyFilter();
}

function applyFilter(){
  const cards = $$('.card', productsEl);
  const matching = cards.filter(c => activeFilter === 'all' || c.dataset.cat === activeFilter);
  matching.forEach((c, i) => {
    c.style.animationDelay = (i % PAGE) * 40 + 'ms';
  });
  let shown = 0;
  cards.forEach(c => {
    const isMatch = matching.includes(c);
    let show = false;
    if (isMatch && shown < visibleCount){ show = true; shown++; }
    c.classList.toggle('is-hiding', !show);
  });
  if (loadMoreBtn){
    const hasMore = matching.length > visibleCount;
    loadMoreBtn.hidden = !hasMore;
    loadMoreBtn.textContent = `Ver más productos (${matching.length - visibleCount})`;
  }
}

if (productsEl){
  renderProducts();

  $$('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('.chip').forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected','false'); });
      chip.classList.add('is-active');
      chip.setAttribute('aria-selected','true');
      activeFilter = chip.dataset.filter;
      visibleCount = PAGE;
      applyFilter();
    });
  });

  loadMoreBtn?.addEventListener('click', () => {
    visibleCount += PAGE;
    applyFilter();
  });

  // Delegación: agregar al carrito
  productsEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (!btn) return;
    addToCart(btn.dataset.add, 1);
    btn.classList.add('is-added');
    setTimeout(() => btn.classList.remove('is-added'), 1200);
  });
}

// Las categorías de la home activan el filtro correspondiente
$$('[data-cat]').forEach(link => {
  if (link.classList.contains('card')) return;
  link.addEventListener('click', () => {
    const cat = link.dataset.cat;
    const chip = $(`.chip[data-filter="${cat}"]`);
    if (chip){ chip.click(); }
  });
});

/* --------------------------------------------------------------------------
   4. Carrito
   -------------------------------------------------------------------------- */
const CART_KEY = 'di_cart_v1';
let cart = loadCart();

function loadCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}
function saveCart(){
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
}
function cartCount(){ return Object.values(cart).reduce((a, q) => a + q, 0); }
function cartTotal(){
  return Object.entries(cart).reduce((sum, [id, q]) => {
    const p = PRODUCTS.find(x => x.id === id);
    return p ? sum + p.price * q : sum;
  }, 0);
}

function addToCart(id, qty = 1){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  cart[id] = (cart[id] || 0) + qty;
  saveCart(); renderCart();
  toast(`Agregado: ${p.name}`);
  bumpCartBtn();
}
function setQty(id, qty){
  if (qty <= 0) delete cart[id]; else cart[id] = qty;
  saveCart(); renderCart();
}
function clearCart(){ cart = {}; saveCart(); renderCart(); toast('Pedido vaciado'); }

function bumpCartBtn(){
  const btn = $('#cartOpen');
  if (!btn) return;
  btn.animate([{ transform:'scale(1)' }, { transform:'scale(1.18)' }, { transform:'scale(1)' }],
    { duration: 380, easing: 'ease-out' });
}

function renderCart(){
  const count = cartCount();
  const countEl = $('#cartCount');
  const headEl = $('#cartHeadCount');
  if (countEl){ countEl.textContent = count; countEl.hidden = count === 0; }
  if (headEl) headEl.textContent = count;

  const body = $('#cartBody');
  const subEl = $('#cartSubtotal');
  if (subEl) subEl.textContent = money(cartTotal());

  if (!body) return;

  const entries = Object.entries(cart);
  if (!entries.length){
    body.innerHTML = `
      <div class="cart__empty">
        <span class="cart__empty-ico" aria-hidden="true">🧁</span>
        <p>Tu pedido está vacío.<br>¡Elige algo dulce del menú!</p>
      </div>`;
    const co = $('#cartCheckout');
    if (co) co.setAttribute('aria-disabled','true');
    return;
  }
  const co = $('#cartCheckout');
  if (co) co.removeAttribute('aria-disabled');

  body.innerHTML = entries.map(([id, q]) => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return '';
    return `
    <div class="cart__item">
      <img class="cart__thumb" src="${imgSrc(p.img,450)}" alt="" width="74" height="74" loading="lazy" decoding="async">
      <div class="cart__info">
        <b>${esc(p.name)}</b>
        <span>${money(p.price)} c/u</span>
        <div class="cart__qty">
          <button type="button" data-dec="${id}" aria-label="Quitar uno">−</button>
          <span>${q}</span>
          <button type="button" data-inc="${id}" aria-label="Agregar uno">+</button>
        </div>
      </div>
      <div class="cart__info" style="text-align:right">
        <span class="cart__price">${money(p.price * q)}</span>
        <div><button class="cart__remove" type="button" data-del="${id}">Eliminar</button></div>
      </div>
    </div>`;
  }).join('');
}

$('#cartBody')?.addEventListener('click', e => {
  const inc = e.target.closest('[data-inc]');
  const dec = e.target.closest('[data-dec]');
  const del = e.target.closest('[data-del]');
  if (inc) setQty(inc.dataset.inc, (cart[inc.dataset.inc] || 0) + 1);
  if (dec) setQty(dec.dataset.dec, (cart[dec.dataset.dec] || 0) - 1);
  if (del) setQty(del.dataset.del, 0);
});

/* Drawer */
const cartEl = $('#cart');
function openCart(){
  cartEl?.classList.add('is-open');
  cartEl?.setAttribute('aria-hidden','false');
  document.body.classList.add('is-locked');
  $('#cartOpen')?.focus?.();
}
function closeCart(){
  cartEl?.classList.remove('is-open');
  cartEl?.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-locked');
}
$('#cartOpen')?.addEventListener('click', openCart);
$$('[data-cart-close]').forEach(el => el.addEventListener('click', closeCart));
$('#cartClear')?.addEventListener('click', clearCart);

/* --------------------------------------------------------------------------
   5. WhatsApp (todos los enlaces con data-whatsapp)
   -------------------------------------------------------------------------- */
function cartMessage(){
  const lines = Object.entries(cart).map(([id, q]) => {
    const p = PRODUCTS.find(x => x.id === id);
    return `• ${q} x ${p.name} — ${money(p.price * q)}`;
  });
  return [
    `Hola ${SHOP.name} 👋 Quiero hacer este pedido:`,
    '',
    ...lines,
    '',
    `Subtotal: ${money(cartTotal())}`,
    `(${SHOP.deliveryNote})`,
    '',
    'Mi nombre: ',
    'Dirección / retiro: '
  ].join('\n');
}

document.addEventListener('click', e => {
  const a = e.target.closest('a[data-whatsapp]');
  if (!a) return;
  e.preventDefault();

  let msg;
  if (a.id === 'cartCheckout'){
    if (!cartCount()){ toast('Tu pedido está vacío 🧁'); return; }
    msg = cartMessage();
    closeCart();
  } else {
    msg = a.dataset.msg || `Hola ${SHOP.name} 👋 Quiero hacer un pedido.`;
  }
  window.open(waLink(msg), '_blank', 'noopener');
});

// Teléfonos
$$('[data-tel]').forEach(el => { el.href = `tel:+${SHOP.whatsapp}`; el.textContent = '+' + SHOP.whatsapp.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2-$3-$4'); });

/* --------------------------------------------------------------------------
   6. Galería + Lightbox
   -------------------------------------------------------------------------- */
const galleryEl = $('#gallery');
let lbIndex = 0;

if (galleryEl){
  galleryEl.innerHTML = GALLERY.map((g, i) => `
    <figure class="gallery__item" data-i="${i}" tabindex="0" role="button"
            aria-label="Ampliar: ${esc(g.cap)}">
      <img src="${imgSrc(g.img,450)}" srcset="${imgSet(g.img)}" sizes="(max-width:720px) 92vw, 30vw"
           alt="${esc(g.cap)}" width="900" height="675" loading="lazy" decoding="async">
      <figcaption>${esc(g.cap)}</figcaption>
    </figure>`).join('');
}

const lightbox = $('#lightbox');
function openLightbox(i){
  lbIndex = (i + GALLERY.length) % GALLERY.length;
  const g = GALLERY[lbIndex];
  $('#lbImg').src = imgSrc(g.img, 900);
  $('#lbImg').alt = g.cap;
  $('#lbCap').textContent = g.cap;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.classList.add('is-locked');
}
function closeLightbox(){
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-locked');
  if (cartEl && !cartEl.classList.contains('is-open')) document.body.classList.remove('is-locked');
}
galleryEl?.addEventListener('click', e => {
  const item = e.target.closest('.gallery__item');
  if (item) openLightbox(+item.dataset.i);
});
galleryEl?.addEventListener('keydown', e => {
  const item = e.target.closest('.gallery__item');
  if (item && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); openLightbox(+item.dataset.i); }
});
$('#lbClose')?.addEventListener('click', closeLightbox);
$('#lbPrev')?.addEventListener('click', () => openLightbox(lbIndex - 1));
$('#lbNext')?.addEventListener('click', () => openLightbox(lbIndex + 1));
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ closeLightbox(); closeCart(); closeNav(); }
  if (lightbox?.classList.contains('is-open')){
    if (e.key === 'ArrowLeft') openLightbox(lbIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(lbIndex + 1);
  }
});

/* --------------------------------------------------------------------------
   7. Testimonios (slider)
   -------------------------------------------------------------------------- */
const track = $('#testimonials');
const dotsEl = $('#dots');
let slide = 0;

if (track){
  track.innerHTML = TESTIMONIALS.map(t => `
    <li>
      <figure class="tcard">
        <blockquote class="tcard__quote">${esc(t.t)}</blockquote>
        <figcaption class="tcard__foot">
          <span class="tcard__avatar" aria-hidden="true">${esc(t.n.charAt(0))}</span>
          <span class="tcard__who"><b>${esc(t.n)}</b><span>${esc(t.w)}</span></span>
          <span class="tcard__stars" aria-label="${t.r} de 5">${'★'.repeat(t.r)}</span>
        </figcaption>
      </figure>
    </li>`).join('');
}

function perView(){
  const w = window.innerWidth;
  return w >= 1081 ? 3 : w >= 721 ? 2 : 1;
}
function maxSlide(){ return Math.max(0, TESTIMONIALS.length - perView()); }

function buildDots(){
  if (!dotsEl) return;
  const n = maxSlide() + 1;
  dotsEl.innerHTML = Array.from({ length: n }, (_, i) =>
    `<button type="button" role="tab" aria-label="Ir al testimonio ${i + 1}" data-i="${i}"></button>`).join('');
}
function goSlide(i){
  slide = Math.min(Math.max(i, 0), maxSlide());
  if (track) track.style.transform = `translateX(-${slide * (100 / perView())}%)`;
  $$('#dots button').forEach((d, k) => {
    d.classList.toggle('is-active', k === slide);
    d.setAttribute('aria-selected', String(k === slide));
  });
}
$('#nextT')?.addEventListener('click', () => goSlide(slide >= maxSlide() ? 0 : slide + 1));
$('#prevT')?.addEventListener('click', () => goSlide(slide <= 0 ? maxSlide() : slide - 1));
dotsEl?.addEventListener('click', e => {
  const b = e.target.closest('[data-i]');
  if (b) goSlide(+b.dataset.i);
});

let autoT;
function startAuto(){
  stopAuto();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  autoT = setInterval(() => goSlide(slide >= maxSlide() ? 0 : slide + 1), 6000);
}
function stopAuto(){ clearInterval(autoT); }
$('#slider')?.addEventListener('mouseenter', stopAuto);
$('#slider')?.addEventListener('mouseleave', startAuto);

if (track){
  buildDots(); goSlide(0); startAuto();
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { buildDots(); goSlide(slide); }, 180);
  });
}

/* --------------------------------------------------------------------------
   8. Header, nav móvil, scrollspy, back-to-top, contadores
   -------------------------------------------------------------------------- */
const header = $('#header');
const nav = $('#nav');
const backdrop = $('#navBackdrop');
const burger = $('#burger');

function openNav(){
  nav?.classList.add('is-open');
  backdrop?.removeAttribute('hidden');
  requestAnimationFrame(() => backdrop?.classList.add('is-open'));
  burger?.setAttribute('aria-expanded','true');
  document.body.classList.add('is-locked');
}
function closeNav(){
  nav?.classList.remove('is-open');
  backdrop?.classList.remove('is-open');
  burger?.setAttribute('aria-expanded','false');
  if (!cartEl?.classList.contains('is-open')) document.body.classList.remove('is-locked');
  setTimeout(() => backdrop?.setAttribute('hidden',''), 350);
}
burger?.addEventListener('click', () => {
  nav?.classList.contains('is-open') ? closeNav() : openNav();
});
backdrop?.addEventListener('click', closeNav);
$$('.nav__link').forEach(l => l.addEventListener('click', closeNav));

const toTop = $('#toTop');
function onScroll(){
  const y = window.scrollY;
  header?.classList.toggle('is-stuck', y > 12);
  toTop?.classList.toggle('is-show', y > 700);
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();
$('#toTop')?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

// Scrollspy
const sections = $$('main section[id]');
const navLinks = $$('.nav__link');
if ('IntersectionObserver' in window && sections.length){
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = '#' + en.target.id;
      navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));
}

// Reveal
const reveals = $$('.reveal');
function revealAll(){ reveals.forEach(el => el.classList.add('is-in')); }
if ('IntersectionObserver' in window){
  const ro = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting){ en.target.classList.add('is-in'); obs.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  reveals.forEach(el => ro.observe(el));
  // Red de seguridad: si el observador no dispara (pestaña en segundo plano,
  // navegadores antiguos, etc.) el contenido se muestra igualmente.
  setTimeout(() => {
    if (!document.querySelector('.reveal.is-in')) revealAll();
  }, 2600);
} else {
  revealAll();
}

// Contadores
const counters = $$('[data-count]');
function runCounter(el){
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const end = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  // Con "reduced motion" mostramos el valor final sin animar
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    el.textContent = end.toLocaleString('es') + suffix;
    return;
  }
  const dur = 1400;
  const t0 = performance.now();
  const step = now => {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * eased).toLocaleString('es') + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
if ('IntersectionObserver' in window && counters.length){
  const co = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      runCounter(en.target);
      obs.unobserve(en.target);
    });
  }, { threshold: .5 });
  counters.forEach(c => co.observe(c));
  // Red de seguridad (ver notas del reveal)
  setTimeout(() => {
    if (!document.querySelector('[data-count][data-done]')) counters.forEach(runCounter);
  }, 2600);
}

/* --------------------------------------------------------------------------
   9. Formularios
   -------------------------------------------------------------------------- */
$('#contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = e.currentTarget;
  const nombre = f.nombre.value.trim();
  const tel = f.telefono.value.trim();
  const tipo = f.tipo.value;
  const msg = f.mensaje.value.trim();
  const status = $('#formStatus');

  let ok = true;
  f.querySelectorAll('[required]').forEach(inp => {
    const bad = !inp.value.trim();
    inp.closest('.field')?.classList.toggle('is-invalid', bad);
    if (bad) ok = false;
  });
  if (!ok){ if (status){ status.style.color = '#FF8A8A'; status.textContent = 'Completa los campos marcados.'; } return; }

  const text = `Hola ${SHOP.name} 👋\n\nNombre: ${nombre}\nTeléfono: ${tel}\nNecesito: ${tipo}${msg ? `\n\n${msg}` : ''}`;
  window.open(waLink(text), '_blank', 'noopener');

  if (status){ status.style.color = '#4BE0B4'; status.textContent = '¡Listo! Abrimos WhatsApp con tu mensaje 💌'; }
  f.reset();
});

$('#newsForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = $('#nEmail');
  const status = $('#newsStatus');
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  if (!ok){ if (status){ status.style.color = '#5A1010'; status.textContent = 'Escribe un correo válido 🙂'; } input.focus(); return; }
  if (status){ status.style.color = '#250F20'; status.textContent = '¡Gracias! Ya eres parte de la dulzura infinita 🎉'; }
  input.value = '';
});

/* --------------------------------------------------------------------------
   10. Init
   -------------------------------------------------------------------------- */
$('#year') && ($('#year').textContent = new Date().getFullYear());
renderCart();
