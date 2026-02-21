const menuData = [
  {
    category: "Especialidades",
    items: [
      {
        name: "Pechuga rellena con papas doradas",
        descEs: "Plato especial con guarnicion",
        descDe: "Gefullte Hahchenbrust mit Ofenkartoffeln",
        price: "65.000",
      },
      {
        name: "Lomito con pure y hierbas",
        descEs: "Filet vacuno en salsa blanca",
        descDe: "Rinderfilet in weisser Sosse mit Kartoffelpuree",
        price: "85.000",
      },
      {
        name: "File vacuno con cebolla y papas salteadas",
        descEs: "Acompanado de papas salteadas",
        descDe: "Rinderfilet mit Zwiebeln und Bratkartoffeln",
        price: "85.000",
      },
    ],
  },
  {
    category: "Minutas",
    items: [
      { name: "Empanada de carne", descEs: "Tradicional", descDe: "mit Rindfleisch", price: "12.000" },
      { name: "Empanada de pollo", descEs: "Tradicional", descDe: "mit Hahhnchen", price: "10.000" },
      { name: "Sandwich de milanesa", descEs: "Simple", descDe: "mit paniertem Schnitzel", price: "28.000" },
      {
        name: "Sandwich de lomito Boqueron",
        descEs: "Carne, pepino, tomate, verdura, huevo y panceta",
        descDe: "mit Rinderfilet, Gurken, Tomaten, Gemuse, Ei und Speck",
        price: "46.000",
      },
      {
        name: "Hamburguesa Especial",
        descEs: "Queso cheddar, bacon, cebolla caramelizada, lechuga y tomate",
        descDe: "Cheddarkase, Speck, gebratene Zwiebeln, Eisbergsalat und Tomate",
        price: "29.000",
      },
      {
        name: "Combo Kids",
        descEs: "Hamburguesa con queso cheddar y papas fritas",
        descDe: "Cheeseburger mit Pommes frites",
        price: "25.000",
      },
    ],
  },
  {
    category: "Picadas",
    items: [
      {
        name: "Picada Criolla",
        descEs: "Chorizo, pepinillos y mandioca (Para 2 personas)",
        descDe: "Wurstchen, Gewurzgurken und Maniok",
        price: "50.000",
      },
      {
        name: "Picada Boqueron",
        descEs: "Milanesa, jamon, queso, aceitunas, pepinillos y pirecas (Para 4 personas)",
        descDe: "Schnitzel, Schinken, Kase, Oliven, Gewurzgurken und Rollkuchen",
        price: "130.000",
      },
      {
        name: "Picada Primavera",
        descEs: "Empanaditas, croquetas, milanesita, chipa guazu, papas noisset y mandioca",
        descDe: "Teigtaschen, Fleischkroketten, Schnitzel, Chipa Guazu, Pommes",
        price: "100.000",
      },
      {
        name: "Superpicada Criolla",
        descEs: "Chorizo, mandioca, sopa paraguaya, pollo, papa frita y carne a la plancha",
        descDe: "Wurstchen, Maniok, Sopa Paraguaya, Hahhnchenschnitzel, Pommes...",
        price: "110.000",
      },
    ],
  },
  {
    category: "Pizzas",
    items: [
      {
        name: "Huerta",
        descEs: "Tomate, cebolla, morron, pepinillos y aceituna",
        descDe: "mit Tomaten, Zwiebeln, Paprika, Gewurzgurken und Oliven",
        sizes: [
          { labelEs: "Pequena", labelEn: "Small", labelDe: "Klein", price: "32.000" },
          { labelEs: "Mediana", labelEn: "Medium", labelDe: "Mittel", price: "46.000" },
          { labelEs: "Grande", labelEn: "Large", labelDe: "Gross", price: "68.000" },
        ],
      },
      {
        name: "Margarita",
        descEs: "Jamon y queso",
        descDe: "mit Schinken und Kase",
        sizes: [
          { labelEs: "Pequena", labelEn: "Small", labelDe: "Klein", price: "34.000" },
          { labelEs: "Mediana", labelEn: "Medium", labelDe: "Mittel", price: "49.000" },
          { labelEs: "Grande", labelEn: "Large", labelDe: "Gross", price: "75.000" },
        ],
      },
      {
        name: "Napolitana",
        descEs: "Jamon, queso, tomate y aceitunas",
        descDe: "mit Schinken, Kase, Tomaten und Oliven",
        sizes: [
          { labelEs: "Pequena", labelEn: "Small", labelDe: "Klein", price: "42.000" },
          { labelEs: "Mediana", labelEn: "Medium", labelDe: "Mittel", price: "60.000" },
          { labelEs: "Grande", labelEn: "Large", labelDe: "Gross", price: "105.000" },
        ],
      },
      {
        name: "Requeson",
        descEs: "Borde relleno, choricitos, cebolla, palmito, morron y requeson",
        descDe: "Wurstchen, Zwiebeln, Palmherzen, Paprika, Ricottakase...",
        sizes: [
          { labelEs: "Pequena", labelEn: "Small", labelDe: "Klein", price: "53.000" },
          { labelEs: "Mediana", labelEn: "Medium", labelDe: "Mittel", price: "75.000" },
          { labelEs: "Grande", labelEn: "Large", labelDe: "Gross", price: "110.000" },
        ],
      },
      {
        name: "Carne",
        descEs: "Carne, choclo y panceta",
        descDe: "mit Fleisch, Mais und Raucherspeck",
        sizes: [
          { labelEs: "Pequena", labelEn: "Small", labelDe: "Klein", price: "39.000" },
          { labelEs: "Mediana", labelEn: "Medium", labelDe: "Mittel", price: "55.000" },
          { labelEs: "Grande", labelEn: "Large", labelDe: "Gross", price: "82.000" },
        ],
      },
      {
        name: "Boqueron",
        descEs: "Champinon, palmito, aceitunas, jamon, queso y borde relleno",
        descDe: "mit Champignons, Palmherzen, Oliven, Schinken...",
        sizes: [
          { labelEs: "Pequena", labelEn: "Small", labelDe: "Klein", price: "55.000" },
          { labelEs: "Mediana", labelEn: "Medium", labelDe: "Mittel", price: "78.000" },
          { labelEs: "Grande", labelEn: "Large", labelDe: "Gross", price: "120.000" },
        ],
      },
      {
        name: "Pizza sin gluten",
        descEs: "Masa especial libre de gluten",
        descDe: "glutenfreie Pizza",
        price: "42.000",
      },
    ],
  },
  {
    category: "Carnes & Milanesas",
    items: [
      {
        name: "Milanesa a la napolitana",
        descEs: "Porcion de carne de res",
        descDe: "Kase uberbacken",
        price: "65.000",
      },
      {
        name: "Lomo a la pimienta",
        descEs: "Plato de fondo",
        descDe: "Pfefferfilet",
        price: "69.000",
      },
      {
        name: "Strogonoff de carne",
        descEs: "Con salsa cremosa",
        descDe: "Rindfleisch Strogonoff",
        price: "72.000",
      },
      {
        name: "Bife a caballo",
        descEs: "Con huevo frito encima",
        descDe: "Rinderfilet mit Ei",
        price: "63.000",
      },
      {
        name: "Cerdo al cazador",
        descEs: "Plato de cerdo",
        descDe: "Jagerschnitzel",
        price: "55.000",
      },
      {
        name: "Surubi grille",
        descEs: "Disponible en temporada",
        descDe: "Gegrillter Surubi",
        price: "90.000",
      },
    ],
  },
  {
    category: "Pastas & Guarniciones",
    items: [
      {
        name: "Lasana",
        descEs: "De carne, pollo o verduras",
        descDe: "Lasagne mit Hackfleisch-, Hahhnchen- oder Gemusefullung",
        price: "40.000",
      },
      {
        name: "Ravioles de ricotta",
        descEs: "Con salsa blanca y choricitos",
        descDe: "Ravioli mit Quarkfullung, Sahnesosse und Wurstchen",
        price: "40.000",
      },
      {
        name: "Spatzle",
        descEs: "Pasta tradicional",
        descDe: "Spatzle",
        price: "27.000",
      },
      {
        name: "Papas fritas con panceta y cheddar",
        descEs: "Guarnicion especial",
        descDe: "Pommes frites mit Raucherspeck und Cheddar Kase",
        price: "30.000",
      },
      {
        name: "Mandioca frita",
        descEs: "Porcion",
        descDe: "Maniok pommes",
        price: "20.000",
      },
    ],
  },
  {
    category: "Ensaladas & Postres",
    items: [
      {
        name: "Ensalada Alemana",
        descEs: "Papas, cebolla, mayonesa y perejil",
        descDe: "Kartoffeln, Zwiebeln, Mayonnaise und Petersilie",
        price: "21.000",
      },
      {
        name: "Ceasar's Salad",
        descEs: "Lechuga iceberg, pollo, panceta, queso y crutones",
        descDe: "Eisbergsalat, Hahhnchen, Speck, Kase und Croutons",
        price: "48.000",
      },
      {
        name: "Helado Acai 500 ml",
        descEs: "Copa helada",
        descDe: "Acai-Beere Eis 500 ml",
        price: "30.000",
      },
      {
        name: "Brownie con helado",
        descEs: "Con helado de vainilla",
        descDe: "Brownie mit Eiscreme",
        price: "20.000",
      },
      { name: "Flan", descEs: "Postre tradicional", descDe: "Flan", price: "11.000" },
    ],
  },
];

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.rooms": "Habitaciones",
    "nav.restaurant": "Restaurante",
    "nav.contact": "Contacto",
    "nav.reserve": "Reservar",
    "theme.dark": "Oscuro",
    "theme.light": "Claro",
    "hero.eyebrow": "Oasis de confort en el Chaco",
    "hero.title": "Elegancia serena, naturaleza viva.",
    "hero.lead":
      "Un refugio con gastronomia de autor, habitaciones premium y la hospitalidad calida de la Colonia Neuland.",
    "hero.reserve": "Reservar ahora",
    "hero.discover": "Descubrir experiencia",
    "hero.location": "Ubicacion",
    "hero.checkin": "Check-in",
    "hero.checkout": "Check-out",
    "exp.eyebrow": "Experiencia Neuland",
    "exp.title": "Naturaleza, cultura y descanso.",
    "exp.lead":
      "En el corazon del Chaco paraguayo, combinamos detalles artesanales, servicios premium y un ambiente que invita a desconectar. Cada espacio fue pensado para elevar tu estadia.",
    "exp.f1.title": "Hospitalidad autentica",
    "exp.f1.desc": "Personal atento, tiempos rapidos y calidez chaqueña.",
    "exp.f2.title": "Espacios de lujo",
    "exp.f2.desc": "Detalles nobles, textiles suaves y vistas abiertas.",
    "exp.f3.title": "Gastronomia local",
    "exp.f3.desc": "Sabores regionales y cocina internacional curada.",
    "exp.f4.title": "Conectividad total",
    "exp.f4.desc": "Wi-Fi veloz en todo el complejo.",
    "rooms.eyebrow": "Habitaciones",
    "rooms.title": "Confort en cada detalle.",
    "rooms.lead":
      "Dormitorios premium con insonorizacion, climatizacion y amenities pensados para un descanso profundo.",
    "rooms.details": "Ver detalles",
    "rooms.suite.title": "Suite Boqueron",
    "rooms.suite.lead": "Espacio amplio, sala privada y cama king.",
    "rooms.suite.f1": "Desayuno incluido",
    "rooms.suite.f2": "Minibar gourmet",
    "rooms.suite.f3": "Vistas al jardin",
    "rooms.double.title": "Premium Doble",
    "rooms.double.lead": "Ideal para parejas o amigos.",
    "rooms.double.f1": "Colchones ortopedicos",
    "rooms.double.f2": "Escritorio de trabajo",
    "rooms.double.f3": "Ducha tipo lluvia",
    "rooms.family.title": "Familiar",
    "rooms.family.lead": "Comodidad para grupos y familias.",
    "rooms.family.f1": "Espacio flexible",
    "rooms.family.f2": "Dos ambientes",
    "rooms.family.f3": "Servicio de habitaciones",
    "rest.eyebrow": "Restaurante Boqueron",
    "rest.title": "Una carta viva, local y sofisticada.",
    "rest.lead":
      "Cocina paraguaya contemporanea, ingredientes frescos y un menu bilingue pensado para cada momento del dia.",
    "rest.breakfast": "Desayuno",
    "rest.lunch": "Almuerzo",
    "rest.dinner": "Cena",
    "menu.specials": "Especialidades",
    "menu.snacks": "Minutas",
    "menu.sharing": "Picadas",
    "menu.pizzas": "Pizzas",
    "menu.meats": "Carnes & Milanesas",
    "menu.pastas": "Pastas & Guarniciones",
    "menu.salads": "Ensaladas & Postres",
    "menu.note": "Todos los precios son en guaranies.",
    "cta.eyebrow": "Reservas",
    "cta.title": "Tu estadia empieza aqui.",
    "cta.lead": "Escribenos o llama directo. Respondemos rapido y personalizamos tu experiencia.",
    "cta.call": "Llamar ahora",
    "cta.mail": "Enviar correo",
    "footer.about": "Un refugio de lujo y tradicion en el Chaco paraguayo. Gracias por su visita.",
    "footer.contact": "Contacto",
    "footer.links": "Enlaces",
    "footer.colony": "Web de la Colonia",
    "footer.experience": "Experiencia",
    "footer.menu": "Carta del Restaurante",
    "footer.rights": "© 2026 Hotel Boqueron. Todos los derechos reservados.",
    "modal.eyebrow": "Habitaciones",
    "modal.reserve": "Reservar",
    "modal.close": "Cerrar",
  },
  en: {
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.rooms": "Rooms",
    "nav.restaurant": "Restaurant",
    "nav.contact": "Contact",
    "nav.reserve": "Book",
    "theme.dark": "Dark",
    "theme.light": "Light",
    "hero.eyebrow": "Comfort oasis in the Chaco",
    "hero.title": "Serene elegance, living nature.",
    "hero.lead":
      "A retreat with signature cuisine, premium rooms, and the warm hospitality of Colonia Neuland.",
    "hero.reserve": "Book now",
    "hero.discover": "Discover experience",
    "hero.location": "Location",
    "hero.checkin": "Check-in",
    "hero.checkout": "Check-out",
    "exp.eyebrow": "Neuland experience",
    "exp.title": "Nature, culture and rest.",
    "exp.lead":
      "In the heart of the Paraguayan Chaco, we blend handcrafted details, premium services, and a setting made to disconnect.",
    "exp.f1.title": "Authentic hospitality",
    "exp.f1.desc": "Attentive staff, quick service, and warm Chaco spirit.",
    "exp.f2.title": "Luxury spaces",
    "exp.f2.desc": "Noble finishes, soft textiles, and open views.",
    "exp.f3.title": "Local cuisine",
    "exp.f3.desc": "Regional flavors and curated international dishes.",
    "exp.f4.title": "Full connectivity",
    "exp.f4.desc": "Fast Wi-Fi across the property.",
    "rooms.eyebrow": "Rooms",
    "rooms.title": "Comfort in every detail.",
    "rooms.lead": "Premium rooms with soundproofing, climate control, and amenities for deep rest.",
    "rooms.details": "View details",
    "rooms.suite.title": "Boqueron Suite",
    "rooms.suite.lead": "Spacious, private lounge and king bed.",
    "rooms.suite.f1": "Breakfast included",
    "rooms.suite.f2": "Gourmet minibar",
    "rooms.suite.f3": "Garden views",
    "rooms.double.title": "Premium Double",
    "rooms.double.lead": "Ideal for couples or friends.",
    "rooms.double.f1": "Orthopedic mattresses",
    "rooms.double.f2": "Work desk",
    "rooms.double.f3": "Rain shower",
    "rooms.family.title": "Family",
    "rooms.family.lead": "Comfort for groups and families.",
    "rooms.family.f1": "Flexible layout",
    "rooms.family.f2": "Two environments",
    "rooms.family.f3": "Room service",
    "rest.eyebrow": "Boqueron restaurant",
    "rest.title": "A living, local and refined menu.",
    "rest.lead": "Contemporary Paraguayan cuisine with fresh ingredients and a menu for every moment.",
    "rest.breakfast": "Breakfast",
    "rest.lunch": "Lunch",
    "rest.dinner": "Dinner",
    "menu.specials": "Specialties",
    "menu.snacks": "Snacks",
    "menu.sharing": "Sharing",
    "menu.pizzas": "Pizzas",
    "menu.meats": "Meats & Schnitzels",
    "menu.pastas": "Pasta & Sides",
    "menu.salads": "Salads & Desserts",
    "menu.note": "All prices are in guaranies.",
    "cta.eyebrow": "Bookings",
    "cta.title": "Your stay starts here.",
    "cta.lead": "Write or call us directly. We respond fast and tailor your experience.",
    "cta.call": "Call now",
    "cta.mail": "Send email",
    "footer.about": "A luxury retreat in the Paraguayan Chaco. Thank you for your visit.",
    "footer.contact": "Contact",
    "footer.links": "Links",
    "footer.colony": "Colony website",
    "footer.experience": "Experience",
    "footer.menu": "Restaurant menu",
    "footer.rights": "© 2026 Hotel Boqueron. All rights reserved.",
    "modal.eyebrow": "Rooms",
    "modal.reserve": "Book",
    "modal.close": "Close",
  },
  de: {
    "nav.home": "Start",
    "nav.experience": "Erlebnis",
    "nav.rooms": "Zimmer",
    "nav.restaurant": "Restaurant",
    "nav.contact": "Kontakt",
    "nav.reserve": "Buchen",
    "theme.dark": "Dunkel",
    "theme.light": "Hell",
    "hero.eyebrow": "Komfortoase im Chaco",
    "hero.title": "Stille Eleganz, lebendige Natur.",
    "hero.lead":
      "Ein Refugium mit Signature-Kuche, Premium-Zimmern und der herzlichen Gastfreundschaft von Colonia Neuland.",
    "hero.reserve": "Jetzt buchen",
    "hero.discover": "Erlebnis entdecken",
    "hero.location": "Lage",
    "hero.checkin": "Check-in",
    "hero.checkout": "Check-out",
    "exp.eyebrow": "Erlebnis Neuland",
    "exp.title": "Natur, Kultur und Erholung.",
    "exp.lead":
      "Im Herzen des paraguayischen Chaco verbinden wir Handwerksdetails, Premium-Services und eine Atmosphare zum Abschalten.",
    "exp.f1.title": "Authentische Gastfreundschaft",
    "exp.f1.desc": "Aufmerksames Personal, schnelle Ablaufe und warme Chaco-Kultur.",
    "exp.f2.title": "Luxusraume",
    "exp.f2.desc": "Edle Details, weiche Textilien und offene Ausblicke.",
    "exp.f3.title": "Lokale Kuche",
    "exp.f3.desc": "Regionale Aromen und kuratierte internationale Gerichte.",
    "exp.f4.title": "Volle Konnektivitat",
    "exp.f4.desc": "Schnelles WLAN im gesamten Haus.",
    "rooms.eyebrow": "Zimmer",
    "rooms.title": "Komfort in jedem Detail.",
    "rooms.lead": "Premium-Zimmer mit Schallschutz, Klimatisierung und Amenities fur erholsamen Schlaf.",
    "rooms.details": "Details ansehen",
    "rooms.suite.title": "Suite Boqueron",
    "rooms.suite.lead": "Grosszugig, private Lounge und Kingsize-Bett.",
    "rooms.suite.f1": "Frühstück inklusive",
    "rooms.suite.f2": "Gourmet-Minibar",
    "rooms.suite.f3": "Blick auf den Garten",
    "rooms.double.title": "Premium Doppel",
    "rooms.double.lead": "Ideal fur Paare oder Freunde.",
    "rooms.double.f1": "Orthopadische Matratzen",
    "rooms.double.f2": "Arbeitsplatz",
    "rooms.double.f3": "Regendusche",
    "rooms.family.title": "Familie",
    "rooms.family.lead": "Komfort fur Gruppen und Familien.",
    "rooms.family.f1": "Flexibler Raum",
    "rooms.family.f2": "Zwei Bereiche",
    "rooms.family.f3": "Zimmerservice",
    "rest.eyebrow": "Restaurant Boqueron",
    "rest.title": "Eine lebendige, lokale und raffinierte Karte.",
    "rest.lead": "Zeitgenossische paraguayische Kuche mit frischen Zutaten fur jeden Moment des Tages.",
    "rest.breakfast": "Frühstück",
    "rest.lunch": "Mittagessen",
    "rest.dinner": "Abendessen",
    "menu.specials": "Spezialitaten",
    "menu.snacks": "Kleine Gerichte",
    "menu.sharing": "Zum Teilen",
    "menu.pizzas": "Pizzen",
    "menu.meats": "Fleisch & Schnitzel",
    "menu.pastas": "Pasta & Beilagen",
    "menu.salads": "Salate & Desserts",
    "menu.note": "Alle Preise in Guaranies.",
    "cta.eyebrow": "Reservierung",
    "cta.title": "Ihr Aufenthalt beginnt hier.",
    "cta.lead": "Schreiben oder rufen Sie uns an. Wir antworten schnell und personalisieren Ihr Erlebnis.",
    "cta.call": "Jetzt anrufen",
    "cta.mail": "E-Mail senden",
    "footer.about": "Ein Luxusrefugium im paraguayischen Chaco. Vielen Dank fur Ihren Besuch.",
    "footer.contact": "Kontakt",
    "footer.links": "Links",
    "footer.colony": "Kolonie-Webseite",
    "footer.experience": "Erlebnis",
    "footer.menu": "Restaurantkarte",
    "footer.rights": "© 2026 Hotel Boqueron. Alle Rechte vorbehalten.",
    "modal.eyebrow": "Zimmer",
    "modal.reserve": "Buchen",
    "modal.close": "Schliessen",
  },
};

const roomData = {
  "Suite Boqueron": {
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    ],
    content: {
      es: {
        title: "Suite Boqueron",
        subtitle: "Suite amplia con sala privada y vista al jardin.",
        description:
          "Ambiente premium con detalles artesanales, textiles suaves y espacios pensados para una estadia tranquila.",
        features: [
          "Cama king con sabanas premium",
          "Sala privada con sofa",
          "Bano amplio con amenities",
          "Vistas al jardin y balcon",
        ],
      },
      en: {
        title: "Boqueron Suite",
        subtitle: "Spacious suite with private lounge and garden view.",
        description:
          "Premium ambience with handcrafted details, soft textiles and spaces designed for a calm stay.",
        features: [
          "King bed with premium linens",
          "Private lounge",
          "Spacious bathroom with amenities",
          "Garden views and balcony",
        ],
      },
      de: {
        title: "Suite Boqueron",
        subtitle: "Grosszugige Suite mit privater Lounge und Gartenblick.",
        description:
          "Premium-Ambiente mit handgefertigten Details, weichen Textilien und ruhigen Raumen.",
        features: [
          "Kingsize-Bett mit Premium-Bettwasche",
          "Private Lounge",
          "Grosses Bad mit Amenities",
          "Gartenblick und Balkon",
        ],
      },
    },
  },
  "Premium Doble": {
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb7b213?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    ],
    content: {
      es: {
        title: "Premium Doble",
        subtitle: "Ideal para parejas o amigos, con doble confort.",
        description:
          "Habitacion calida, luminosa y silenciosa, perfecta para descansar y trabajar con comodidad.",
        features: [
          "Dos camas premium",
          "Escritorio con iluminacion",
          "Ducha tipo lluvia",
          "Climatizacion inteligente",
        ],
      },
      en: {
        title: "Premium Double",
        subtitle: "Ideal for couples or friends, double comfort.",
        description: "Warm, bright and quiet room, perfect for rest and work.",
        features: ["Two premium beds", "Work desk with lighting", "Rain shower", "Smart climate"],
      },
      de: {
        title: "Premium Doppel",
        subtitle: "Ideal fur Paare oder Freunde, doppelter Komfort.",
        description: "Warmes, helles und ruhiges Zimmer fur Erholung und Arbeit.",
        features: [
          "Zwei Premium-Betten",
          "Arbeitsplatz mit Licht",
          "Regendusche",
          "Intelligente Klimatisierung",
        ],
      },
    },
  },
  Familiar: {
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    ],
    content: {
      es: {
        title: "Familiar",
        subtitle: "Comodidad para grupos y familias.",
        description:
          "Dos ambientes flexibles con espacio para todos, ideal para estadias largas o viajes en familia.",
        features: [
          "Dos ambientes separados",
          "Sofa cama adicional",
          "Servicio a la habitacion",
          "Guardado amplio",
        ],
      },
      en: {
        title: "Family",
        subtitle: "Comfort for groups and families.",
        description: "Two flexible environments with room for everyone.",
        features: ["Two separate areas", "Extra sofa bed", "Room service", "Ample storage"],
      },
      de: {
        title: "Familie",
        subtitle: "Komfort fur Gruppen und Familien.",
        description: "Zwei flexible Bereiche mit Platz fur alle.",
        features: ["Zwei getrennte Bereiche", "Zusatzsofa", "Zimmerservice", "Viel Stauraum"],
      },
    },
  },
};

const menuList = document.querySelector(".menu__list");
const tabs = document.querySelectorAll(".menu__tab");
let currentCategory = tabs[0]?.dataset.category;
let currentLang = "es";
let activeRoom = null;

function renderMenu(category) {
  const data = menuData.find((item) => item.category === category);
  if (!data || !menuList) return;

  menuList.innerHTML = data.items
    .map((item) => {
      let primary = item.descEs || "";
      let secondary = item.descDe || "";

      if (currentLang === "de") {
        primary = item.descDe || item.descEs || "";
        secondary = item.descEs || "";
      } else if (currentLang === "en") {
        primary = item.descEn || item.descEs || "";
        secondary = "";
      }

      const lines = [primary, secondary].filter(Boolean);
      const descHtml = lines.map((line) => `<p>${line}</p>`).join("");
      const sizeLabels = {
        es: "labelEs",
        en: "labelEn",
        de: "labelDe",
      };
      const sizeLabelKey = sizeLabels[currentLang] || "labelEs";
      const priceHtml = item.sizes
        ? `<div class="menu__sizes">
            ${item.sizes
              .map(
                (size) => `
                  <div class="menu__size">
                    <span>${size[sizeLabelKey]}</span>
                    <strong>${size.price} Gs.</strong>
                  </div>
                `
              )
              .join("")}
          </div>`
        : `<strong>${item.price} Gs.</strong>`;

      return `
        <article class="menu__item">
          <h4>${item.name}</h4>
          ${descHtml}
          ${priceHtml}
        </article>
      `;
    })
    .join("");
}

if (tabs.length) {
  currentCategory = tabs[0].dataset.category;
  tabs[0].classList.add("is-active");
  renderMenu(currentCategory);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => btn.classList.remove("is-active"));
      tab.classList.add("is-active");
      currentCategory = tab.dataset.category;
      renderMenu(currentCategory);
    });
  });
}

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__links");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealTargets = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const modal = document.getElementById("room-modal");
const modalTitle = modal?.querySelector(".modal__title");
const modalSubtitle = modal?.querySelector(".modal__subtitle");
const modalDesc = modal?.querySelector(".modal__desc");
const modalList = modal?.querySelector(".modal__list");
const modalImage = modal?.querySelector(".modal__image");
const modalThumbs = modal?.querySelector(".modal__thumbs");
const roomButtons = document.querySelectorAll(".card__action");

const setActiveImage = (url) => {
  if (modalImage) {
    modalImage.src = url;
  }
  if (modalThumbs) {
    modalThumbs.querySelectorAll(".modal__thumb").forEach((thumb) => {
      thumb.classList.toggle("is-active", thumb.dataset.image === url);
    });
  }
};

const openModal = (roomName) => {
  if (!modal || !roomData[roomName]) return;
  activeRoom = roomName;
  const data = roomData[roomName];
  const langData = data.content[currentLang] || data.content.es;

  if (modalTitle) modalTitle.textContent = langData.title;
  if (modalSubtitle) modalSubtitle.textContent = langData.subtitle;
  if (modalDesc) modalDesc.textContent = langData.description;
  if (modalList) {
    modalList.innerHTML = langData.features.map((item) => `<li>${item}</li>`).join("");
  }
  if (modalThumbs) {
    modalThumbs.innerHTML = data.images
      .map(
        (img) =>
          `<button class="modal__thumb" type="button" data-image="${img}" style="background-image:url('${img}')"></button>`
      )
      .join("");
  }

  setActiveImage(data.images[0]);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

roomButtons.forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.room));
});

modal?.addEventListener("click", (event) => {
  const target = event.target;
  if (target?.matches("[data-modal-close]")) {
    closeModal();
  }
  if (target?.classList.contains("modal__thumb")) {
    setActiveImage(target.dataset.image);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

const langButtons = document.querySelectorAll(".lang-toggle");

const applyTranslations = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[lang]?.[key];
    if (value) {
      el.textContent = value;
    }
  });

  if (currentCategory) {
    renderMenu(currentCategory);
  }

  if (modal?.classList.contains("is-open") && activeRoom) {
    openModal(activeRoom);
  }
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    localStorage.setItem("lang", lang);
    langButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");
    applyTranslations(lang);
  });
});

const savedLang = localStorage.getItem("lang") || "es";
const initialLangButton = document.querySelector(`.lang-toggle[data-lang="${savedLang}"]`);
if (initialLangButton) {
  langButtons.forEach((btn) => btn.classList.remove("is-active"));
  initialLangButton.classList.add("is-active");
}
applyTranslations(savedLang);

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme") || "dark";

if (savedTheme === "light") {
  document.body.classList.add("theme-light");
  if (themeToggle) themeToggle.checked = true;
}

themeToggle?.addEventListener("change", () => {
  const isLight = themeToggle.checked;
  document.body.classList.toggle("theme-light", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
