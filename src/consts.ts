// Globale Daten der Webseite – hier zentral pflegen.

export const SITE_TITLE = 'H-R-R Facility GmbH';
export const SITE_DESCRIPTION =
  'Reinigung und Hauswartung für Liegenschaften, Unternehmen und Privathaushalte in Kreuzlingen, Winterthur und Umgebung.';

export const CONTACT = {
  phone: '071 688 78 51',
  phoneHref: 'tel:+41716887851',
  mobile: '077 480 54 54',
  mobileHref: 'tel:+41774805454',
  whatsappHref: 'https://wa.me/41774805454',
  email: 'Info@h-r-r.ch',
  emailHref: 'mailto:Info@h-r-r.ch',
  street: 'Hauptstrasse 137b',
  city: '8274 Tägerwilen',
  region: 'Kreuzlingen · Winterthur · Umgebung',
};

export const NAV_MENU = [
  { url: '/', title: 'Startseite' },
  { url: '/reinigung', title: 'Reinigung' },
  { url: '/hauswartung', title: 'Hauswartung' },
  { url: '/about', title: 'Über uns' },
  { url: '/contact', title: 'Kontakt' },
];

// ---------------------------------------------------------------
// BILDER – echte Fotos statt KI-Bilder.
// Sobald der Kunde eigene Fotos liefert (Team, Fahrzeug, Objekte),
// die Dateien nach /public/img/fotos/ legen und hier nur den Pfad
// ersetzen, z. B. src: '/img/fotos/team.jpg'
// ---------------------------------------------------------------
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMAGES = {
  hero: { src: u('photo-1581578731548-c64695cc6952', 1800), alt: 'Mitarbeiterin reinigt eine Glastür' },
  treppenhaus: { src: u('photo-1718152421680-d1580e843cc9'), alt: 'Bodenreinigung in einem Gebäude' },
  buero: { src: u('photo-1627905646269-7f034dcc5738'), alt: 'Reinigung eines Büroarbeitsplatzes' },
  privat: { src: u('photo-1758273705627-937374bfa978'), alt: 'Staubsaugen in einer Wohnung' },
  fenster: { src: u('photo-1482449609509-eae2a7ea42b7'), alt: 'Fensterreinigung an einer Glasfassade' },
  boden: { src: u('photo-1669101602108-fa5ba89507ee'), alt: 'Nassreinigung eines Korridors' },
  werkzeug: { src: u('photo-1581783898377-1c85bf937427'), alt: 'Werkzeug für kleine Reparaturen' },
  hauswart: { src: u('photo-1646119945537-2a73112f5913'), alt: 'Hauswart mit Arbeitshandschuhen' },
  garten: { src: u('photo-1689728318937-17d24bc0a65c'), alt: 'Rasenkanten werden geschnitten' },
  rasen: { src: u('photo-1734303023491-db8037a21f09'), alt: 'Rasenmähen bei einer Liegenschaft' },
  liegenschaft: { src: u('photo-1768735805861-46098a5886ad', 2200), alt: 'Mehrfamilienhäuser mit Balkonen' },
};
