
export interface SideMenu {
  url: string;
  name: string;
  icon: string;
  active: boolean;
  isOpen: boolean;
  subMenus: SideSubMenu[];
}

interface SideSubMenu {
  url: string;
  name: string;
  icon: string
}
