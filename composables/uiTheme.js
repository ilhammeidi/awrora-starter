import { useState } from '#app';

export const useRtl = () => (useState('rtl', () => undefined));
export const useThemeMode = () => (useState('mode', () => undefined));
export const useHeader = () => useState(
  'header',
  () => 'mixed', /* available: mixed, basic, droplist, mega, hamburger, navscroll, search */
);
export const useFooter = () => useState(
  'footer',
  () => 'sitemap', /* basic, blog, contact, sitemap */
);
export const useCorner = () => useState(
  'corner',
  () => 'chat', /* chat, nav */
);

const states = {
  themeMode: useThemeMode,
  rtl: useRtl,
  header: useHeader,
  footer: useFooter,
  corner: useCorner,
};

export function toggleDark() {
  const themeMode = useThemeMode();
  const storedTheme = localStorage.getItem('awroraDarkMode');

  themeMode.value = storedTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('awroraDarkMode', themeMode.value);
}

export function setRtl(val) {
  const rtl = useRtl();
  rtl.value = val;
}

export default states;
