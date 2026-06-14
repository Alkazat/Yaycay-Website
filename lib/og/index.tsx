import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Dynamic Open Graph / social card.
 *
 * Each marketing page exports a tiny `opengraph-image.tsx` that calls
 * `renderOgImage({ title, photo })`. The card is the page's most dominant
 * photo (when one ships) under a royal scrim, with the page title in the
 * box-art voice and the Yaycay lockup pinned top-left. Pages without a real
 * photo yet fall back to the sky→sunset brand gradient.
 *
 * All assets (fonts, lockup, photos) are co-located here and loaded with
 * `new URL(<literal>, import.meta.url)` so Next's bundler traces and ships
 * them with the serverless function.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/png';

const ROYAL = '#073d72';
const CREAM = '#fefcf6';

// Assets live under lib/og and are pinned into the function trace via
// `outputFileTracingIncludes` in next.config. Read relative to the project root.
const dir = join(process.cwd(), 'lib', 'og');
const load = (...rel: string[]): Promise<Buffer> => readFile(join(dir, ...rel));

// Loaded once per lambda.
const fredokaP = load('fonts', 'Fredoka-SemiBold.ttf');
const nunitoP = load('fonts', 'Nunito-ExtraBold.ttf');
const lockupP = load('lockup.png').then(
  (b) => `data:image/png;base64,${b.toString('base64')}`,
);

const PHOTO_LOADERS = {
  'hero-family': () => load('photos', 'hero-family.jpg'),
  city: () => load('photos', 'city.jpg'),
  outdoors: () => load('photos', 'outdoors.jpg'),
  sand: () => load('photos', 'sand.jpg'),
  theme: () => load('photos', 'theme.jpg'),
} as const;

export type OgPhoto = keyof typeof PHOTO_LOADERS;

export async function renderOgImage({
  title,
  photo,
}: {
  title: string;
  photo?: OgPhoto;
}): Promise<ImageResponse> {
  const [fredoka, nunito, lockup] = await Promise.all([fredokaP, nunitoP, lockupP]);
  const photoUrl =
    photo && PHOTO_LOADERS[photo]
      ? `data:image/jpeg;base64,${(await PHOTO_LOADERS[photo]()).toString('base64')}`
      : null;

  const { width, height } = OG_SIZE;

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a4c8b',
          fontFamily: 'Nunito',
        }}
      >
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt=""
            width={width}
            height={height}
            style={{ position: 'absolute', top: 0, left: 0, width, height, objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width,
              height,
              display: 'flex',
              backgroundImage:
                'linear-gradient(135deg, #6fbeec 0%, #45a8e2 44%, #ffd778 84%, #f7aa15 100%)',
            }}
          />
        )}

        {/* legibility scrim */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            display: 'flex',
            backgroundImage:
              'linear-gradient(180deg, rgba(4,34,63,0) 34%, rgba(4,34,63,0.88) 100%)',
          }}
        />

        {/* brand lockup */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={lockup}
          alt="Yaycay"
          width={300}
          height={Math.round(300 * 0.7987)}
          style={{ position: 'absolute', top: 50, left: 60 }}
        />

        {/* page title + sacred tagline */}
        <div
          style={{
            position: 'absolute',
            left: 64,
            right: 88,
            bottom: 58,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'Fredoka',
              fontWeight: 600,
              fontSize: 76,
              lineHeight: 1.04,
              letterSpacing: -1,
              color: CREAM,
              textShadow: `0 3px 0 ${ROYAL}, 0 8px 18px rgba(4,34,63,0.55)`,
            }}
          >
            {title}
          </div>
          <div
            style={{ display: 'flex', marginTop: 18, fontSize: 30, fontWeight: 800, color: '#dcefff' }}
          >
            For families making memories.
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: [
        { name: 'Fredoka', data: fredoka, weight: 600, style: 'normal' },
        { name: 'Nunito', data: nunito, weight: 800, style: 'normal' },
      ],
    },
  );
}
