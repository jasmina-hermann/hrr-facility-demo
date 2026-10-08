// Globale Daten der Webseite: hier zentral pflegen.

export const SITE_TITLE = 'H-R-R Facility GmbH';
export const SITE_URL = 'https://www.h-r-r.ch';
export const SITE_DESCRIPTION =
  'Professioneller Reinigungsdienst & Hauswartung in Kreuzlingen, Winterthur und im Kanton Thurgau. Reinigung, Hauswartung, Renovierungsarbeiten und Gartenunterhalt.';

export const CONTACT = {
  phone: '071 688 78 51',
  phoneHref: 'tel:+41716887851',
  mobile: '077 480 54 54',
  mobileHref: 'tel:+41774805454',
  whatsappHref: 'https://wa.me/41774805454',
  email: 'Info@h-r-r.ch',
  emailHref: 'mailto:Info@h-r-r.ch',
  instagram: 'https://www.instagram.com/hrr_mavraj',
  street: 'Hauptstrasse 137b',
  city: '8274 Tägerwilen',
  region: 'Kreuzlingen · Winterthur · Kanton Thurgau',
  hours: [
    { days: 'Montag bis Freitag', time: '07:30 bis 17:00' },
    { days: 'Samstag', time: '08:30 bis 12:00' },
    { days: 'Sonntag', time: 'geschlossen' },
  ],
};

// Dienstleistungen (für Menü, Footer und Startseite)
export const SERVICES = [
  { url: '/reinigung', title: 'Reinigung' },
  { url: '/hauswartung', title: 'Hauswartung' },
  { url: '/renovation', title: 'Renovierungsarbeiten' },
  { url: '/garten', title: 'Gartenunterhalt' },
];

// ---------------------------------------------------------------
// STANDORTE: jeder Standort bekommt eine eigene Seite (/standort/...)
// Das ist wichtig für Google: Wer "Reinigung Winterthur" sucht,
// findet eine Seite, die genau dazu passt.
// Sobald die Adresse in Winterthur feststeht: street und city ausfüllen
// und opening auf false setzen.
// ---------------------------------------------------------------
export const LOCATIONS = [
  {
    slug: 'kreuzlingen',
    name: 'Kreuzlingen',
    canton: 'Thurgau',
    street: 'Hauptstrasse 137b',
    city: '8274 Tägerwilen',
    opening: false,
    intro:
      'Von unserem Sitz in Tägerwilen aus sind wir in wenigen Minuten in Kreuzlingen und im ganzen Kanton Thurgau im Einsatz. Für Verwaltungen, Unternehmen und Privathaushalte.',
    text:
      'Seit über 20 Jahren kennen wir die Liegenschaften am Bodensee und im Thurgau. Wir reinigen Treppenhäuser, Büros und Wohnungen, übernehmen die Hauswartung, kleine Renovierungsarbeiten und den Gartenunterhalt. Alles aus einer Hand und mit festen Ansprechpersonen.',
    places: ['Kreuzlingen', 'Tägerwilen', 'Gottlieben', 'Bottighofen', 'Ermatingen', 'Münsterlingen', 'Weinfelden', 'Frauenfeld', 'Amriswil', 'Romanshorn', 'Arbon', 'Steckborn'],
  },
  {
    slug: 'winterthur',
    name: 'Winterthur',
    canton: 'Zürich',
    street: '',
    city: '',
    opening: true,
    intro:
      'Auch in Winterthur und Umgebung sind wir für Sie da: Reinigung, Hauswartung, Renovierungsarbeiten und Gartenunterhalt. Mit der gleichen Erfahrung wie am Bodensee.',
    text:
      'Mit unserem neuen Standort in Winterthur sind wir noch näher bei unseren Kundinnen und Kunden in der Region. Ob Treppenhausreinigung im Mehrfamilienhaus, Büroreinigung, Umzugsreinigung mit Abgabe oder regelmässige Hauswartung: Wir übernehmen die Arbeiten rund um Ihre Liegenschaft.',
    places: ['Winterthur', 'Oberwinterthur', 'Seen', 'Töss', 'Wülflingen', 'Veltheim', 'Mattenbach', 'Seuzach', 'Wiesendangen', 'Elsau', 'Neftenbach', 'Illnau-Effretikon'],
  },
];

export const NAV_MENU: { url: string; title: string; children?: { url: string; title: string }[] }[] = [
  { url: '/', title: 'Startseite' },
  { url: '/privat', title: 'Privat' },
  { url: '/geschaeftlich', title: 'Geschäftlich' },
  { url: '/dienstleistungen', title: 'Dienstleistungen', children: SERVICES },
  {
    url: '/standort/kreuzlingen',
    title: 'Standorte',
    children: [
      { url: '/standort/kreuzlingen', title: 'Kreuzlingen & Thurgau' },
      { url: '/standort/winterthur', title: 'Winterthur' },
    ],
  },
  { url: '/about', title: 'Über uns' },
  { url: '/contact', title: 'Kontakt' },
];

// ---------------------------------------------------------------
// BILDER: echte Fotos statt KI-Bilder.
// Eigene Fotos des Kunden in den Ordner public/img/ hochladen
// und hier nur den Pfad ersetzen, z. B. src: '/img/hrr-auto.jpg'
// (Der Ordner "public" wird im Pfad weggelassen.)
// ---------------------------------------------------------------
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMAGES = {
  // --- ORIGINALFOTOS DES KUNDEN (in public/img/ hochladen) ---
  // Solange eine Datei fehlt, zeigt die Seite automatisch das Ersatzfoto (fallback).
  team: { src: '/img/hrr-team.jpg.jpg', fallback: u('photo-1581578731548-c64695cc6952', 2000), alt: 'Das Team der H-R-R Facility GmbH', pos: 'center 30%' },
  reinigung: { src: '/img/hrr-reinigung.jpg.jpg', fallback: u('photo-1718152421680-d1580e843cc9'), alt: 'Mitarbeitende von H-R-R mit Hochdruckreiniger vor dem Firmenwagen', pos: 'center 18%' },
  hauswartung: { src: '/img/hrr-hauswartung.jpg.jpg', fallback: u('photo-1646119945537-2a73112f5913'), alt: 'Laubbläser für die Hauswartung', pos: 'center 40%' },
  renovation: { src: '/img/hrr-renovation.jpg.jpg', fallback: u('photo-1562259929-b4e1fd3aef09'), alt: 'Firmenwagen der H-R-R Facility GmbH', pos: 'center 55%' },
  garten: { src: '/img/hrr-garten.jpg.jpg', fallback: u('photo-1689728318937-17d24bc0a65c'), alt: 'Mitarbeiter von H-R-R beim Heckenschneiden', pos: 'center 50%' },
  sicherheit: { src: '/img/hrr-sicherheit.jpg.jpg', fallback: u('photo-1627905646269-7f034dcc5738'), alt: 'Mitarbeiter der H-R-R Facility GmbH', pos: 'center 30%' },

  // --- Stockfotos für die Unterseiten ---
  hero: { src: u('photo-1581578731548-c64695cc6952', 1800), alt: 'Mitarbeiterin reinigt eine Glastür' },
  treppenhaus: { src: u('photo-1718152421680-d1580e843cc9'), alt: 'Bodenreinigung in einem Gebäude' },
  buero: { src: u('photo-1627905646269-7f034dcc5738'), alt: 'Reinigung eines Büroarbeitsplatzes' },
  privat: { src: u('photo-1758273705627-937374bfa978'), alt: 'Staubsaugen in einer Wohnung' },
  fenster: { src: u('photo-1482449609509-eae2a7ea42b7'), alt: 'Fensterreinigung an einer Glasfassade' },
  boden: { src: u('photo-1669101602108-fa5ba89507ee'), alt: 'Nassreinigung eines Korridors' },
  werkzeug: { src: u('photo-1581783898377-1c85bf937427'), alt: 'Werkzeug für kleine Reparaturen' },
  hauswart: { src: u('photo-1646119945537-2a73112f5913'), alt: 'Hauswart mit Arbeitshandschuhen' },
  bohren: { src: u('photo-1562259929-b4e1fd3aef09'), alt: 'Akku-Bohrmaschine bei Renovierungsarbeiten' },
  messen: { src: u('photo-1615974679600-665fb9468c4f'), alt: 'Ausmessen mit dem Massband' },
  rasen: { src: u('photo-1734303023491-db8037a21f09'), alt: 'Rasenmähen bei einer Liegenschaft' },
  beet: { src: u('photo-1621272156568-7306716648df'), alt: 'Gepflegter Garten mit Schubkarre' },
  liegenschaft: { src: u('photo-1768735805861-46098a5886ad', 2200), alt: 'Mehrfamilienhäuser mit Balkonen' },
};

// ---------------------------------------------------------------
// BEWERTUNGEN & KARTE
// ---------------------------------------------------------------
const mapQuery = 'H-R-R Facility GmbH, Hauptstrasse 137b, 8274 Tägerwilen';

export const RATINGS = {
  ofri: { score: '5.0', count: 8, url: 'https://www.ofri.ch/H-R-RMavraj' },
  topOfferten: { url: 'https://top-offerten.ch/reinigungsfirma' },
  google: { url: 'https://share.google/OJrd5obSwN16zmvys' },
};

// Echte Google-Bewertungen hier eintragen (Text 1:1 von Google kopieren).
// Solange die Liste leer ist, wird nur der Link zu Google angezeigt.
// Beispiel:
// { name: 'Vorname N.', stars: 5, text: 'Text der Bewertung', date: 'August 2026' },
export const REVIEWS: { name: string; stars: number; text: string; date?: string }[] = [];

export const MAP = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`,
  route: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`,
};
