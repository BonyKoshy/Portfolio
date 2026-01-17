import { z } from "zod";

const envSchema = z.object({
  VITE_APP_TITLE: z.string().optional(),
  BASE_URL: z.string().default("/"),
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
});

// Validate process.env or import.meta.env
const _env = envSchema.safeParse({
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE,
  BASE_URL: import.meta.env.BASE_URL,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  SSR: import.meta.env.SSR,
});

if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error.format());
  throw new Error("Invalid environment variables");
}

/** Centralized environment variable configuration and validation. */
export const env = _env.data;
