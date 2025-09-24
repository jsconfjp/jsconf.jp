async function loadGoogleFont({
  family,
  weight,
  text,
}: {
  family: string;
  weight: number;
  text?: string;
}) {
  const params = new URLSearchParams({
    family: `${family}${weight ? `:wght@${weight}` : ""}`,
  });
  if (text) {
    params.append("text", text);
  } else {
    params.append("subset", "latin");
  }

  const url = `https://fonts.googleapis.com/css2?${params.toString()}`;
  const css = await fetch(url).then((res) => res.text());
  const fontUrl = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  )?.[1];
  if (!fontUrl) {
    throw new Error("Font file not found in CSS fetched from Google Fonts");
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export async function loadGoogleFonts<
  Font extends {
    family: string;
    weight: number;
    text?: string;
  },
>(
  fonts: Font[],
  options: {
    maxRetries?: number; // default: 1
  } = {},
): Promise<ArrayBuffer[]> {
  const maxRetries = options?.maxRetries ?? 1;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return Promise.all(fonts.map((font) => loadGoogleFont(font)));
    } catch (error) {
      if (i === maxRetries - 1) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** i));
    }
  }
  throw new Error("Failed to load Google Fonts");
}
