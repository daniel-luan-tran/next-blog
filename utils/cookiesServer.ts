"use server";

import { cookies } from "next/headers";

export async function getLangCookie () {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('locale');
  return cookie ? cookie.value : 'en';
};