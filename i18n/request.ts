import { getLangCookie } from '@/utils/cookiesServer';
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const userLocale = await getLangCookie();
  return {
    locale: userLocale,
    messages: (await import(`../messages/${userLocale}.json`)).default
  };
});