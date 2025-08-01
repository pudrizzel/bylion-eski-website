import createMiddleware from 'next-intl/middleware';
import {locales} from '../i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'tr',

  // Always use locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|en|fr|ru|de|es)/:path*']
};