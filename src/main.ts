import './style.css';

const whatsapp = '5491176703052';
const wa = (mensaje: string) =>
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;

const categorias = [
  {
    id: 'parrilla',
    numero: '01',
    nombre: 'Parrilla y minutas',
    subtitulo: 'El sabor de los clásicos',
    descripcion: 'Hay sabores que nunca pasan de moda. Nuestra propuesta reúne platos tradicionales para disfrutar de una buena comida, compartir una charla y regalarse ese momento que uno se merece. Desde los cortes de carne hasta las minutas de siempre, cada elección invita a sentarse a la mesa y disfrutar.',
    platos: [
      'Bife de chorizo',
      'Asado americano',
      'Bife a la plancha',
      'Chorizo',
      'Ojo de bife',
      'Banderita',
      'Chuleta de cerdo',
      'Bondiola',
      'Matambre a la pizza',
      'Suprema a la plancha',
      'Milanesa de carne con guarnición',
      'Milanesa de pollo con guarnición',
    ]
  },
  {
    id: 'guarniciones',
    numero: '02',
    nombre: 'Guarniciones',
    subtitulo: 'El acompañamiento perfecto',
    descripcion: 'Elegí el acompañamiento ideal para disfrutar tus platos favoritos.',
    platos: [
      'Papas fritas',
      'Papas a la española',
      'Puré de papa',
      'Puré de calabaza',
      'Ensalada mixta'
    ]
  },
  {
    id: 'sugerencias-cheff',
    numero: '03',
    nombre: 'Sugerencias del Cheff',
    subtitulo: 'Recomendaciones de la casa',
    descripcion: 'Opciones especiales para disfrutar algo diferente y lleno de sabor.',
    platos: [
      'Ensalada César',
      'Ensalada mediterránea',
      'Risotto'
    ]
  },
  {
    id: 'pizza',
    numero: '08',
    nombre: 'Pizzería y empanadas',
    subtitulo: 'Para compartir algo rico',
    descripcion: 'Una pizza en el centro de la mesa tiene algo especial: todos encuentran su porción favorita y la charla se disfruta un poco más. Sumale unas empanadas y tenés una combinación ideal para compartir con amigos, en familia o cuando aparece ese antojo irresistible.',
    platos: [
      'Pizza muzzarella',
      'Pizza de jamón y morrón',
      'Fugazzeta',
      'Fugazzeta rellena',
      'Pizza calabresa',
      'Pizza al molde',
      'Pizza media masa',
      'Empanadas de bondiola y barbacoa',
      'Empanadas de pollo',
      'Empanadas de carne',
      'Empanadas de jamón y queso'
    ]
  },
  {
    id: 'pastas',
    numero: '07',
    nombre: 'Pastas y salsas',
    subtitulo: 'Platos para disfrutar sin apuro',
    descripcion: 'A veces, lo que más se disfruta es un buen plato de pastas. Una opción clásica, reconfortante y perfecta para hacer una pausa en el día. Elegí tu variedad preferida y acompañala con una salsa para completar una comida llena de sabor.',
    platos: [
      'Sorrentinos de jamón y queso o verdura',
      'Ravioles de verdura',
      'Tallarines',
      'Ñoquis',
      'Canelones de verdura o pollo',
      'Salsa mixta',
      'Salsa blanca',
      'Salsa filetto',
      'Salsa boloñesa',
      'Salsa estofado'
    ]
  },
  {
    id: 'sandwiches',
    numero: '04',
    nombre: 'Sándwiches y tostados',
    subtitulo: 'Un clásico para cualquier momento',
    descripcion: 'Para el almuerzo, para una comida al paso o para cuando tenés ganas de algo bien sabroso. Los sándwiches clásicos ofrecen alternativas para distintos gustos, con combinaciones que convierten una pausa cotidiana en un momento para disfrutar.',
    platos: [
      'Milanesa con lechuga y tomate',
      'Milanesa completa',
      'Milanesa con cheddar y panceta',
      'Milanesa de pollo',
      'Bondiola con lechuga y tomate',
      'Bondiola completa',
      'Bondiola con cheddar y panceta',
      'Lomito con lechuga y tomate',
      'Lomito completo',
      'Lomito con cheddar y panceta',
      'Tostado de jamón y queso',
      'Medialunas con jamón y queso'
    ]
  },
  {
    id: 'cafeteria',
    numero: '05',
    nombre: 'Cafetería y cosas dulces',
    subtitulo: 'Una pausa que se disfruta',
    descripcion: 'El aroma del café, algo dulce para acompañarlo y unos minutos para vos. Ya sea para comenzar el día, encontrarte con alguien o hacer una pausa a la tarde, siempre existe una buena excusa para disfrutar de algo rico.',
    platos: [
      'Café con leche',
      'Submarino',
      'Cappuccino',
      'Tortas',
      'Facturas',
      'Medialunas',
      'Exprimido de naranja',
      'Licuados'
    ]
  },
  {
    id: 'bebidas',
    numero: '06',
    nombre: 'Bebidas',
    subtitulo: 'El acompañamiento ideal',
    descripcion: 'Una comida compartida merece algo rico para tomar. Encontrá distintas alternativas para acompañar tus platos favoritos y disfrutar de una mesa completa.',
    platos: [
      'Cervezas',
      'Vinos',
      'Gaseosas de vidrio',
      'Gaseosas familiares',
      'Gaseosas individuales',
      'Jugos',
      'Agua saborizada',
      'Agua mineral'
    ]
  }
];

const fotoPlato = (plato: string): string | null => {
  const p = plato.toLowerCase();

  if (/suprema/.test(p)) return '/images/suprema-a-la-plancha.jpg';
  if (/copetín|copetin|coctelería|cocteleria/.test(p)) return null;

  const fotos: [RegExp, string][] = [
    [/bife de chorizo/, '/images/bife-de-chorizo.jpeg'],
    [/asado americano/, '/images/asado-americano.jpg'],
    [/bife a la plancha/, '/images/bife-a-la-plancha.jpg'],
    [/chorizo/, '/images/chorizo.jpg'],
    [/ojo de bife/, '/images/ojo-de-bife.jpg'],
    [/banderita/, '/images/banderita.jpg'],
    [/chuleta de cerdo/, '/images/chuleta-de-cerdo.jpg'],
    [/bondiola.*(cheddar|panceta)/, '/images/sanguche-bondiola-cheddar-panceta.jpg'],
    [/bondiola.*completa/, '/images/sanguche-bondiola-completo.jpg'],
    [/bondiola/, '/images/sanguche-bondiola-lechuga-tomate.jpg'],
    [/matambre a la pizza/, '/images/matambre-a-la-pizza.jpg'],
    [/milanesa de carne con guarnición/, '/images/milanesa-de-carne.jpg'],
    [/milanesa de pollo con guarnición/, '/images/milanesa-de-pollo.jpg'],
    [/milanesa.*(cheddar|panceta)/, '/images/sanguche-milanesa-cheddar-panceta.jpg'],
    [/milanesa completa/, '/images/sanguche-milanesa-completo.jpg'],
    [/milanesa de pollo/, '/images/sanguche-milanesa-pollo.jpg'],
    [/milanesa/, '/images/sangueche-milanesa-lechuga-tomate.jpg'],
    [/papas fritas/, '/images/papas_fritas.jpg'],
    [/papas a la española/, '/images/papas-espanolas.jpeg'],
    [/puré de calabaza/, '/images/pure-de-calabaza.jpg'],
    [/puré de papa/, '/images/pure-de-papas.jpg'],
    [/ensalada césar/, '/images/ensalada-cesar.jpeg'],
    [/ensalada mediterránea/, '/images/ensalada-mediterranea.jpg'],
    [/ensalada mixta/, '/images/ensalada-mixta.jpg'],
    [/risotto/, '/images/risotto.jpg'],
    [/pizza muzzarella/, '/images/pizza-muzzarela.jpg'],
    [/pizza de jamón y morrón/, '/images/pizza-jamon-y-morrones.jpg'],
    [/fugazzeta rellena/, '/images/fugazzeta-rellena.jpg'],
    [/fugazzeta/, '/images/fugazzeta.jpg'],
    [/pizza calabresa/, '/images/pizza-calabresa.png'],
    [/pizza al molde/, '/images/pizza-al-molde.jpg'],
    [/pizza media masa/, '/images/pizza-media-masa.jpeg'],
    [/empanadas/, '/images/empanadas.png'],
    [/sorrentinos/, '/images/sorrentinos.jpg'],
    [/ravioles/, '/images/ravioles.jpg'],
    [/tallarines/, '/images/tallarines.jpg'],
    [/ñoquis/, '/images/noquis.jpg'],
    [/canelones/, '/images/canelones.jpg'],
    [/salsa/, '/images/salsas.jpg'],
    [/lomito.*(cheddar|panceta)/, '/images/sanguche-bondiola-cheddar-panceta.jpg'],
    [/lomito.*completo/, '/images/sanguche-bondiola-completo.jpg'],
    [/lomito/, '/images/sanguche-bondiola-lechuga-tomate.jpg'],
    [/tostado de jamón y queso/, '/images/tostado-jamon-y-queso.jpg'],
    [/medialunas con jamón y queso/, '/images/medialuna-jamon-y-queso.jpg'],
    [/café con leche/, '/images/cafe-con-leche.png'],
    [/submarino/, '/images/submarino.png'],
    [/cappuccino/, '/images/cappuccino.png'],
    [/tortas/, '/images/tortas.png'],
    [/facturas/, '/images/facturas.png'],
    [/medialunas/, '/images/medialunas.png'],
    [/exprimido de naranja/, '/images/exprimido-naranja.jpg'],
    [/licuados/, '/images/licuados.png'],
    [/cervezas/, '/images/cervezas.jpg'],
    [/vinos/, '/images/vinos.jpeg'],
    [/gaseosas de vidrio/, '/images/gaseosas-de-vidrio.jpg'],
    [/gaseosas familiares/, '/images/gaseosas-familiares.jpg'],
    [/gaseosas individuales/, '/images/gaseosas-individuales.png'],
    [/jugos/, '/images/jugos.jpg'],
    [/agua saborizada/, '/images/agua-saborizada.jpg'],
    [/agua mineral/, '/images/agua-mineral.jpg']
  ];

  return fotos.find(([patron]) => patron.test(p))?.[1] ?? null;
};

const tarjetas = categorias.map(categoria => `
  <article class="menu-card" id="${categoria.id}">
    <div class="card-top">
      <span class="eyebrow">${categoria.subtitulo}</span>
      <span class="card-number">${categoria.numero}</span>
    </div>
    <h3>${categoria.nombre}</h3>
    <p class="card-description">${categoria.descripcion}</p>
    <ul class="dish-list">
      ${categoria.platos.map((plato) => `
        <li class="dish-photo-card">${fotoPlato(plato) ? `<img src="${fotoPlato(plato)}" alt="${plato}" loading="lazy" decoding="async">` : ""}<span class="dish-photo-name">${plato}</span></li>
      `).join('')}
    </ul>
    <a class="text-link" href="${wa(`Hola, Lo de Darío. Quería consultar por ${categoria.nombre}.`)}" target="_blank" rel="noopener">
      Consultar por WhatsApp <span>↗</span>
    </a>
  </article>
`).join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <a href="#inicio" class="brand">
      <img src="/images/logo.jpg" alt="Logo de Lo de Darío">
      <span>
        <strong>LO DE DARÍO</strong>
        <small>PARRILLA · PIZZERÍA · CAFÉ</small>
      </span>
    </a>
    <nav class="navigation">
      <a href="#nosotros">Nosotros</a>
      <a href="#carta">La carta</a>
      <a href="#ubicacion">Ubicación</a>
    </nav>
    <a class="header-button" href="${wa('Hola, Lo de Darío. Quería hacer una consulta.')}" target="_blank" rel="noopener">Contactanos ↗</a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-kicker">POMPEYA · BUENOS AIRES</span>
        <img class="hero-logo" src="/images/logo.jpg" alt="Lo de Darío Parrilla">
        <span class="hero-intro">La buena mesa tiene un lugar</span>
        <h1>Sabores que reúnen.<br><em>Momentos que quedan.</em></h1>
        <p class="hero-description">
          Parrilla, pizzas, pastas, minutas y cafetería para disfrutar
          esos pequeños grandes momentos que empiezan alrededor de una mesa.
          Vení por tus sabores favoritos y quedate con ganas de volver.
        </p>
        <div class="hero-buttons">
          <a class="button button-gold" href="#carta">DESCUBRÍ LA CARTA <span>↓</span></a>
          <a class="button button-outline" href="${wa('Hola, Lo de Darío. Quería consultar por la carta.')}" target="_blank" rel="noopener">CONSULTANOS <span>↗</span></a>
        </div>
        <div class="hero-address"><span></span> Av. Sáenz 702 · Pompeya · CABA</div>
      </div>
      <div class="hero-side-label">BUENA COMIDA · BUENOS MOMENTOS</div>
    </section>

    <section class="about section" id="nosotros">
      <div class="section-marker"><span>01</span> NUESTRA ESENCIA</div>
      <div class="about-grid">
        <div>
          <span class="eyebrow">Bienvenidos a Lo de Darío</span>
          <h2>El gusto de comer rico,<br><em>como tiene que ser.</em></h2>
          <div class="gold-line"></div>
        </div>
        <div class="about-copy">
          <p>Hay lugares a los que uno llega por hambre y a los que después vuelve por mucho más: por los sabores conocidos, por la charla que se alarga, por compartir algo rico y por disfrutar de un momento diferente en medio de la rutina.</p>
          <p>En <strong>Lo de Darío</strong> reunimos una propuesta variada para acompañarte en distintos momentos del día. Una comida con sabor a clásico, una pizza para compartir, unas pastas reconfortantes, un sándwich contundente o un café acompañado de algo dulce.</p>
          <p>Porque comer no es solamente sentarse a la mesa: también es encontrarse, conversar, celebrar las pequeñas cosas y disfrutar de esos momentos que hacen bien. Te esperamos en Av. Sáenz 702, Pompeya, para que encuentres tu próximo favorito.</p>
        </div>
      </div>
      <div class="features">
        <div class="feature"><span>✦</span><h3>Sabores clásicos</h3><p>Platos conocidos y opciones para distintos gustos.</p></div>
        <div class="feature"><span>✧</span><h3>Para cada momento</h3><p>Desde el almuerzo hasta una pausa con café.</p></div>
        <div class="feature"><span>❖</span><h3>Una mesa para compartir</h3><p>Porque todo sabe mejor cuando se disfruta juntos.</p></div>
      </div>
    </section>

    <section class="quote-section">
      <span class="quote-stars">✦ &nbsp; ✦ &nbsp; ✦</span>
      <p>La buena comida no solo se disfruta:<br><em>se comparte, se recuerda y se vuelve a buscar.</em></p>
      <span class="quote-signature">LO DE DARÍO · PARRILLA</span>
    </section>

    <section class="menu-section section" id="carta">
      <div class="section-marker"><span>02</span> ALGO RICO TE ESPERA</div>
      <div class="menu-heading">
        <div>
          <span class="eyebrow">Nuestra propuesta</span>
          <h2>Una carta para<br><em>abrir el apetito.</em></h2>
        </div>
        <p>¿Tenés ganas de una buena parrillada, una pizza para compartir, pastas o un café con algo dulce? Explorá nuestras categorías y encontrá una opción para cada antojo. Los precios no se publican en esta web; podés consultarnos directamente.</p>
      </div>
      <p class="photo-disclaimer">Fotografías ilustrativas de referencia. No son necesariamente imágenes de los platos preparados en nuestro local.</p>
    <div class="menu-grid">${tarjetas}</div>
      <p class="menu-note">La disponibilidad de los productos puede variar. Consultanos por WhatsApp para conocer las opciones del día.</p>
    </section>

    <section class="invitation">
      <div class="invitation-image"></div>
      <div class="invitation-content">
        <span class="eyebrow">Hacé una pausa</span>
        <h2>Siempre hay una buena razón para <em>sentarse a la mesa.</em></h2>
        <p>Un plato favorito, una charla pendiente, una merienda compartida o simplemente las ganas de comer algo rico. En Lo de Darío, cada momento puede ser una buena oportunidad para disfrutar. Elegí tu antojo y escribinos para consultar.</p>
        <a class="button button-gold" href="${wa('Hola, Lo de Darío. Quería consultar qué opciones tienen disponibles.')}" target="_blank" rel="noopener">HABLAR POR WHATSAPP ↗</a>
      </div>
    </section>

    <section class="location section" id="ubicacion">
      <div class="section-marker"><span>03</span> CÓMO LLEGAR</div>
      <div class="location-grid">
        <div>
          <span class="eyebrow">Te esperamos en Pompeya</span>
          <h2>Tu próxima comida<br><em>empieza acá.</em></h2>
          <p>Estamos sobre la avenida Sáenz, en el barrio de Pompeya. Guardá nuestra dirección, consultanos lo que necesites y vení a descubrir tu próximo sabor favorito.</p>
          <div class="address">
            <span class="address-symbol">⌖</span>
            <div><small>ENCONTRANOS EN</small><strong>Av. Sáenz 702</strong><span>Pompeya, Ciudad Autónoma de Buenos Aires</span></div>
          </div>
          <a class="button button-gold" href="https://www.google.com/maps/search/?api=1&query=Av.+Saenz+702+Pompeya+CABA" target="_blank" rel="noopener">CÓMO LLEGAR ↗</a>
        </div>

      </div>
    </section>
  </main>

  <footer class="footer">
    <a class="footer-brand" href="#inicio"><img src="/images/logo.jpg" alt=""><span><strong>LO DE DARÍO</strong><small>PARRILLA</small></span></a>
    <p>Buena comida, buenos momentos y una mesa para compartir.</p>
    <div class="footer-phones">
      <a class="footer-contact" href="${wa('Hola, Lo de Darío. Quería hacer una consulta.')}" target="_blank" rel="noopener">
        <span class="phone-label">WHATSAPP PRINCIPAL</span>
        <strong>11 7670-3052</strong>
        <span>Contactar por WhatsApp ↗</span>
      </a>
      <a class="footer-secondary-phone" href="tel:+5491148702907">
        <span class="phone-label">TELÉFONO SECUNDARIO</span>
        <strong>11 4870-2907</strong>
        <span>Llamar por teléfono ↗</span>
      </a>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Lo de Darío</span><span>Av. Sáenz 702 · Pompeya · CABA</span><a href="#inicio">VOLVER ARRIBA ↑</a></div>
  </footer>

  <a class="floating-whatsapp" href="${wa('Hola, Lo de Darío. Quería hacer una consulta.')}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp">
    <svg class="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a12.5 12.5 0 0 0-10.7 19l-1.5 6 6.2-1.6A12.5 12.5 0 1 0 16 3Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M11.2 9.7c-.4-.9-.8-.9-1.2-.9h-1c-.4 0-.9.2-1.3.7-.4.5-1.7 1.7-1.7 4.1s1.8 4.8 2 5.1c.3.3 3.5 5.5 8.6 7.1 4.2 1.3 5.1 1 6-.1.9-1 1.2-2 1.2-2.4s-.3-.5-.7-.7l-2.8-1.4c-.4-.2-.7-.3-1 .2l-1.3 1.6c-.3.3-.5.4-1 .2a11.3 11.3 0 0 1-3.3-2 12.4 12.4 0 0 1-2.3-2.9c-.2-.4 0-.6.2-.8l.9-1.1c.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8l-1.6-3.9Z" fill="currentColor" transform="translate(3 0) scale(.8)"/></svg><span>CONSULTANOS</span>
  </a>
`;
