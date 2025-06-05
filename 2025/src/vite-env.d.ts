/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
