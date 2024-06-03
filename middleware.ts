import createMiddleware from 'next-intl/middleware';
import { appLocales } from './i18n';

export default createMiddleware({
    locales: appLocales,
    defaultLocale: appLocales[0]
});

export const config = {
    matcher: ['/', '/(de|en)/:path*']
};