

export interface MockTabNavItem {
  id: number | string,
  sessionId?: any,
  instanceId?: any,
  label: string,
  route: string,
  isActive?: boolean,
  disableRipple?: boolean,
  backgroundColor?: string
}