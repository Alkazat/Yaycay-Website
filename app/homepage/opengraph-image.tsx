import { renderOgImage } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'The family holiday companion · Yaycay';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({ title: 'The family holiday companion', photo: 'hero-family' });
}
