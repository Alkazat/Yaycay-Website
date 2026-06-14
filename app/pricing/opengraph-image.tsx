import { renderOgImage } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'Simple, one-off pricing · Yaycay';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({ title: 'Simple, one-off pricing' });
}
