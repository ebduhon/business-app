
export interface MockMenuItem {
  text: string;
  icon: string;
  route: string;
  submenu: Array<MockMenuItem>;
}