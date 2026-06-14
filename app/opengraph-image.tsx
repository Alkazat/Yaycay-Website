import { renderOgImage } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'Yaycay, the family holiday companion';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({
    title: 'The holiday your kids will never stop talking about',
    photo: 'hero-family',
  });
}
