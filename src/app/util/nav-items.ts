export const navItems: NavItem[] = [
  { id: 1, name: 'Дома', route: '/' },
  { id: 2, name: 'Мои Изработки', route: '/portfolio' },
  { id: 3, name: 'Контакт', route: '/contact' },
];

export type NavItem = { id: number; name: string; route: string };
