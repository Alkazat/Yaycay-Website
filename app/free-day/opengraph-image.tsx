import { renderOgImage } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'Build your free day · Yaycay';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({ title: 'Build your free day', photo: 'hero-family' });
}
