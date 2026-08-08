import { drizzle } from 'drizzle-orm/d1';
import { getRequestContext } from '@cloudflare/next-on-pages';

export function getDb() {
  // getRequestContext() is undefined during `next build` in standard Node.js
  const env = getRequestContext()?.env;

  if (!env || !env.DB) {
    // Return null or mock instance during build phase
    return null;
  }

  return drizzle(env.DB);
}
