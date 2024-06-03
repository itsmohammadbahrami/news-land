import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const appLocales = ['en', 'de'];

export default getRequestConfig(async ({ locale }) => {
    if (!appLocales.includes(locale as any)) notFound();

    return {
        messages: (await import(`./locales/${locale}.json`)).default
    };
});