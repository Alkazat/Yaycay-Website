/** Emits a single application/ld+json script. Pass a pre-stringified @graph. */
export function JsonLd({ json }: { json: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
