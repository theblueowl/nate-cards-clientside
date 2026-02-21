interface ImportMetaEnv {
  siteKey?: string; // your variable
  formSpreeUrl?: string;
  // add other variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
