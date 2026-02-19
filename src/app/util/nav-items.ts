export const navItems: NavItem[] = [
  { id: 1, name: 'Home', route: '/' },
  { id: 2, name: 'Portfolio', route: '/portfolio' },
  { id: 3, name: 'Contact', route: '/contact' },
];

export type NavItem = { id: number; name: string; route: string };
