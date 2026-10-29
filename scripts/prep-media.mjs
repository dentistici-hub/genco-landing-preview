// One-off: turns the client's originals (../assets/biemme, kept out of the build) into web-sized sources
// in src/assets/media/. Astro then makes the AVIF/WebP responsive sets at build time.
// Re-run only if the originals change: node scripts/prep-media.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SRC = fileURLToPath(new URL('../../assets/biemme/', import.meta.url));
const OUT = fileURLToPath(new URL('../src/assets/media/', import.meta.url));
mkdirSync(OUT, { recursive: true });

// [original file, output name]
const map = [
  ['Pergole_02.jpg', 'pergola-giardino'],
  ['Pergole_01.png', 'pergola-render'],
  ['Vetrate scorrevoli_01.jpg', 'vetrate-panoramiche'],
  ['Ambientazione Flash.png', 'persiane-flash-ambiente'],
  ['Mixer storica_V2D.jpg', 'persiane-mixer-ambiente'],
  ['Flash_dettaglio angolo esterno.png', 'flash-angolo'],
  ['Flash_dettaglio maniglia.png', 'flash-maniglia'],
  ['Mixer storica_angolo esterno.png', 'mixer-angolo'],
  ['Mixer storica_maniglia.png', 'mixer-maniglia'],
  ['Mixer storica_vista estena.png', 'mixer-esterna'],
  ['Mixer storica_vista interna.png', 'mixer-interna'],
  ['Inversa-Ambientazione.jpg', 'inversa-ambiente'],
  ['Inversa_01.jpg', 'inversa-anta'],
  ['Inversa_02.jpg', 'inversa-esterno'],
  ['Inversa_03.jpg', 'inversa-interno'],
  ['Inversa_04.jpg', 'inversa-maniglia'],
];

for (const [file, name] of map) {
  const input = SRC + file;
  const stats = await sharp(input, { limitInputPixels: false }).stats();
  const meta = await sharp(input, { limitInputPixels: false }).metadata();
  const width = Math.min(meta.width, 2400);
  let p = sharp(input, { limitInputPixels: false }).resize({ width, withoutEnlargement: true });
  // PNGs that are fully opaque become JPEG; real transparency stays PNG.
  if (meta.hasAlpha && !stats.isOpaque) { await p.png({ compressionLevel: 9 }).toFile(`${OUT}${name}.png`); console.log(name, 'png (alpha)'); }
  else { await p.flatten({ background: '#ffffff' }).jpeg({ quality: 84, mozjpeg: true }).toFile(`${OUT}${name}.jpg`); console.log(name, 'jpg', width); }
}
