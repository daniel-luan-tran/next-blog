"use client";

import Cookies from 'js-cookie';

const defaultOptions = {
  secure: true,
  sameSite: 'strict',
  path: '/',
  expires: 7, // 7 days
};

/**
 * Sets a cookie on the client-side using the js-cookie library.
 *
 * @param name - The name of the cookie.
 * @param value - The value of the cookie.
 * @param options - Additional options for the cookie (e.g., expires, path, secure, sameSite).
 */
export function setClientCookie(name: string, value: string, options: any = {}) {
  Cookies.set(name, value, {
    ...defaultOptions,
    ...options,
  });
}

/**
 * Gets a cookie value from the client-side using the js-cookie library.
 *
 * @param name - The name of the cookie to retrieve.
 * @returns The value of the cookie, or undefined if not found.
 */
export function getClientCookie(name: string) {
  return Cookies.get(name);
}

/**
 * Deletes a cookie from the client-side using the js-cookie library.
 *
 * @param name - The name of the cookie to delete.
 */
export function deleteClientCookie(name: string) {
  Cookies.remove(name);
}
