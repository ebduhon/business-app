
import { DynamicDialog } from './dynamic-dialog';
import { LoadingSpinner } from './loading-spinner';
import { ProgressBar } from './progress-bar';
import { ProgressSpinner } from './progress-spinner';
import { SecondaryToolbar } from './secondary-toolbar';
import { Sidenav } from './sidenav';
import { StatusBar } from './status-bar';
import { Tabnav } from './tabnav';
import { UiConfig } from './ui-config';
import { UiWindow } from './ui-window';

export interface FrameworkStoreState {
  dynamicDialog: DynamicDialog;
  loadingSpinner: LoadingSpinner;
  progressBar: ProgressBar;
  progressSpinner: ProgressSpinner;
  secondaryToolbar: SecondaryToolbar;
  sidenav: Sidenav;
  statusBar: StatusBar;
  tabnav: Tabnav;
  uiConfig: UiConfig;
  uiWindow: UiWindow;
}