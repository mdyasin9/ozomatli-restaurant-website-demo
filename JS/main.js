// Ozomatli - Main JS
(function () {
  "use strict";

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    // Close on link click
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Menu category filter
  const catBtns = document.querySelectorAll(".cat-btn");
  const cards = document.querySelectorAll(".menu-card");
  catBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      catBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      cards.forEach((card) => {
        if (cat === "all" || card.dataset.cat === cat) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Copy address
  const copyBtn = document.getElementById("copy-address");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const address = "Playa Caletilla 52, Reforma Iztaccihuatl Nte., Iztacalco, 08810 Ciudad de México, CDMX, México";
      try {
        await navigator.clipboard.writeText(address);
        const original = copyBtn.textContent;
        copyBtn.textContent = document.documentElement.lang === "en" ? "Copied!" : "¡Copiado!";
        setTimeout(() => (copyBtn.textContent = original), 2000);
      } catch {
        alert(address);
      }
    });
  }

  // i18n
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_menu: "Menú",
      nav_gallery: "Galería",
      nav_hours: "Horarios",
      nav_location: "Ubicación",
      nav_contact: "Contacto",
      btn_whatsapp: "WhatsApp",
      hero_eyebrow: "Crepería & Espacio Cultural",
      hero_title: "Ozomatli",
      hero_desc: "Crepas deliciosas, malteadas cremosas y un ambiente artístico en el corazón de Iztacalco. Ven a disfrutar de sabores únicos en un espacio lleno de cultura mexicana.",
      btn_view_menu: "Ver Menú",
      btn_directions: "Cómo llegar",
      about_title: "Un espacio para el arte y el sabor",
      about_p1: "Ozomatli es más que una crepería: es un espacio cultural en Iztacalco donde el arte, el diseño mexicano y la buena comida se encuentran.",
      about_p2: "Disfruta de crepas dulces y saladas, malteadas artesanales y café de calidad mientras exploras un ambiente creativo. Ideal para una tarde con amigos, familia o para inspirarte.",
      feat_1: "Crepas caseras",
      feat_2: "Malteadas y bebidas especiales",
      feat_3: "Ambiente artístico",
      feat_4: "Terraza y mesas al aire libre",
      menu_title: "Nuestro Menú",
      menu_subtitle: "Selección de productos verificados. Pregunta por el menú completo y precios actualizados al visitar o por WhatsApp.",
      cat_all: "Todos",
      cat_crepas: "Crepas",
      cat_drinks: "Bebidas",
      cat_shakes: "Malteadas",
      item_crepa_dulce: "Crepa Dulce",
      item_crepa_dulce_desc: "Crepa suave rellena de Nutella u otros sabores dulces. Perfecta para compartir.",
      item_crepa_salada: "Crepa Salada",
      item_crepa_salada_desc: "Crepa rellena de jamón, queso y hierbas. Opción salada ideal.",
      item_cafe: "Café & Bebidas",
      item_cafe_desc: "Cappuccino, lattes y bebidas especiales preparadas al momento.",
      item_oreo: "Oreo",
      item_oreo_desc: "Malteada de Oreo con crema batida y galleta.",
      item_caramel: "Caramelo / Otras",
      item_caramel_desc: "Malteadas de caramelo, chocolate, vainilla y más sabores.",
      item_frutal: "Especiales Frutales",
      item_frutal_desc: "Bebidas refrescantes con fruta, chamoy y toques mexicanos.",
      price_ask: "Consultar precio",
      menu_note: "Los precios de malteadas corresponden a la promoción de lanzamiento visible en el local ($45 → $35). El menú completo y precios actualizados se confirman al contactar o visitar el establecimiento.",
      gallery_title: "Galería",
      hours_title: "Horarios",
      day_mon: "Lunes",
      day_tue: "Martes",
      day_wed: "Miércoles",
      day_thu: "Jueves",
      day_fri: "Viernes",
      day_sat: "Sábado",
      day_sun: "Domingo",
      closed: "Cerrado",
      hours_note: "Horarios según información pública disponible. Confirma por WhatsApp antes de visitar, especialmente en días festivos.",
      location_title: "Ubicación",
      btn_view_maps: "Ver en Google Maps",
      btn_get_directions: "Cómo llegar",
      btn_copy_address: "Copiar dirección",
      contact_title: "Contacto",
      contact_call: "Llamar",
      contact_whatsapp: "WhatsApp",
      contact_maps: "Google Maps",
      contact_maps_desc: "Ver ubicación",
      contact_note: "No se encontró un correo electrónico público ni redes sociales oficiales verificadas. Usa el teléfono o WhatsApp para contactar.",
      cta_title: "¿Listo para visitarnos?",
      cta_desc: "Escríbenos por WhatsApp o ven a disfrutar de nuestras crepas y el ambiente de Ozomatli.",
      cta_btn: "Escribir por WhatsApp",
      footer_tagline: "Crepería & Espacio Cultural · Iztacalco, CDMX"
    },
    en: {
      nav_home: "Home",
      nav_menu: "Menu",
      nav_gallery: "Gallery",
      nav_hours: "Hours",
      nav_location: "Location",
      nav_contact: "Contact",
      btn_whatsapp: "WhatsApp",
      hero_eyebrow: "Creperie & Cultural Space",
      hero_title: "Ozomatli",
      hero_desc: "Delicious crepes, creamy milkshakes and an artistic atmosphere in the heart of Iztacalco. Come enjoy unique flavors in a space full of Mexican culture.",
      btn_view_menu: "View Menu",
      btn_directions: "Get Directions",
      about_title: "A space for art and flavor",
      about_p1: "Ozomatli is more than a creperie: it is a cultural space in Iztacalco where art, Mexican design and good food meet.",
      about_p2: "Enjoy sweet and savory crepes, artisanal milkshakes and quality coffee while exploring a creative atmosphere. Ideal for an afternoon with friends, family or for inspiration.",
      feat_1: "Homemade crepes",
      feat_2: "Milkshakes and special drinks",
      feat_3: "Artistic atmosphere",
      feat_4: "Terrace and outdoor tables",
      menu_title: "Our Menu",
      menu_subtitle: "Selection of verified products. Ask for the full menu and updated prices when visiting or via WhatsApp.",
      cat_all: "All",
      cat_crepas: "Crepes",
      cat_drinks: "Drinks",
      cat_shakes: "Milkshakes",
      item_crepa_dulce: "Sweet Crepe",
      item_crepa_dulce_desc: "Soft crepe filled with Nutella or other sweet flavors. Perfect for sharing.",
      item_crepa_salada: "Savory Crepe",
      item_crepa_salada_desc: "Crepe filled with ham, cheese and herbs. Ideal savory option.",
      item_cafe: "Coffee & Drinks",
      item_cafe_desc: "Cappuccino, lattes and special drinks prepared to order.",
      item_oreo: "Oreo",
      item_oreo_desc: "Oreo milkshake with whipped cream and cookie.",
      item_caramel: "Caramel / Others",
      item_caramel_desc: "Caramel, chocolate, vanilla and more milkshake flavors.",
      item_frutal: "Fruit Specials",
      item_frutal_desc: "Refreshing drinks with fruit, chamoy and Mexican touches.",
      price_ask: "Ask for price",
      menu_note: "Milkshake prices correspond to the launch promotion visible on site ($45 → $35). Full menu and updated prices are confirmed when contacting or visiting.",
      gallery_title: "Gallery",
      hours_title: "Opening Hours",
      day_mon: "Monday",
      day_tue: "Tuesday",
      day_wed: "Wednesday",
      day_thu: "Thursday",
      day_fri: "Friday",
      day_sat: "Saturday",
      day_sun: "Sunday",
      closed: "Closed",
      hours_note: "Hours according to publicly available information. Confirm via WhatsApp before visiting, especially on holidays.",
      location_title: "Location",
      btn_view_maps: "View on Google Maps",
      btn_get_directions: "Get Directions",
      btn_copy_address: "Copy Address",
      contact_title: "Contact",
      contact_call: "Call",
      contact_whatsapp: "WhatsApp",
      contact_maps: "Google Maps",
      contact_maps_desc: "View location",
      contact_note: "No public email or verified official social media was found. Use phone or WhatsApp to contact.",
      cta_title: "Ready to visit us?",
      cta_desc: "Message us on WhatsApp or come enjoy our crepes and the atmosphere of Ozomatli.",
      cta_btn: "Message on WhatsApp",
      footer_tagline: "Creperie & Cultural Space · Iztacalco, CDMX"
    }
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    const dict = translations[lang] || translations.es;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    try {
      localStorage.setItem("ozomatli-lang", lang);
    } catch (_) {}
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Init language
  let initial = "es";
  try {
    const saved = localStorage.getItem("ozomatli-lang");
    if (saved && translations[saved]) initial = saved;
  } catch (_) {}
  setLanguage(initial);
})();
