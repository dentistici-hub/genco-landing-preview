// Renders public/og-image.jpg (1200x630): client photo on the right, brand copy on the left.
// Re-run after changing the brand copy or the photo: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const photo = fileURLToPath(new URL('../src/assets/media/pergola-giardino.jpg', import.meta.url));
const out = fileURLToPath(new URL('../public/og-image.jpg', import.meta.url));

const bg = await sharp(photo).resize(1200, 630, { fit: 'cover', position: 'right' }).toBuffer();
const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#151a1a" stop-opacity=".96"/><stop offset=".52" stop-color="#151a1a" stop-opacity=".88"/><stop offset="1" stop-color="#151a1a" stop-opacity=".05"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<text x="72" y="120" font-family="Georgia, 'Times New Roman', serif" font-size="24" letter-spacing="5" fill="#dba682" font-weight="700">PERSIANE · PERGOLE · VETRATE</text>
<text font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700" fill="#ffffff" letter-spacing="-2"><tspan x="72" y="240">Persiane,</tspan><tspan x="72" y="316">pergole e vetrate</tspan><tspan x="72" y="392">fornite e posate da noi.</tspan></text>
<text x="72" y="540" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="700" fill="#ffffff">Genco</text>
<text x="72" y="580" font-family="Georgia, 'Times New Roman', serif" font-size="24" fill="#c3cbd0">GENCO srl</text>
</svg>`);
await sharp(bg).composite([{ input: overlay }]).jpeg({ quality: 86, mozjpeg: true }).toFile(out);
console.log('og-image.jpg written');
