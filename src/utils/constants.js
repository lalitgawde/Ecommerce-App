

const env = import.meta.env;

export const BACKEND_URL = env.VITE_STRAPI_URL || "http://localhost:1337";
