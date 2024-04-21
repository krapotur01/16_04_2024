interface Header {
  style: 'primary' | 'ghost';
  value: string;
}

export interface HeaderProps {
  [index: number]: Header;
}
