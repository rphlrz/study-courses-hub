import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UIService } from './ui.service';
import { NotificationComponent, NotificationData } from '../../shared/components/notification/notification.component';

export interface NotificationConfig extends MatSnackBarConfig {
  icon?: string;
  action?: string;
  persistent?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);
  private uiService = inject(UIService);

  private defaultConfig: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'end',
    verticalPosition: 'bottom',
    panelClass: ['notification-snackbar']
  };

  success(message: string, config?: NotificationConfig): void {
    this.show(message, {
      ...config,
      panelClass: ['notification-snackbar', 'notification-success'],
      icon: config?.icon || 'check_circle'
    });
  }

  error(message: string, config?: NotificationConfig): void {
    this.show(message, {
      ...config,
      panelClass: ['notification-snackbar', 'notification-error'],
      icon: config?.icon || 'error',
      duration: config?.duration || 7000
    });
  }

  warning(message: string, config?: NotificationConfig): void {
    this.show(message, {
      ...config,
      panelClass: ['notification-snackbar', 'notification-warning'],
      icon: config?.icon || 'warning'
    });
  }

  info(message: string, config?: NotificationConfig): void {
    this.show(message, {
      ...config,
      panelClass: ['notification-snackbar', 'notification-info'],
      icon: config?.icon || 'info'
    });
  }

  private show(message: string, config?: NotificationConfig): void {
    const finalConfig = {
      ...this.defaultConfig,
      ...config,
      data: {
        message,
        action: config?.action || 'Fechar',
        icon: config?.icon
      } as NotificationData,
      panelClass: [
        ...(Array.isArray(this.defaultConfig.panelClass) ? this.defaultConfig.panelClass : []),
        ...(config?.panelClass ? (Array.isArray(config.panelClass) ? config.panelClass : [config.panelClass]) : []),
        this.uiService.isDarkTheme() ? 'dark-theme' : ''
      ].filter(Boolean)
    };

    const snackBarRef = this.snackBar.openFromComponent(
      NotificationComponent,
      finalConfig
    );

    if (config?.persistent) {
      const sub = this.uiService.themeChange$.subscribe(isDark => {
        const classes = snackBarRef.containerInstance.snackBarConfig.panelClass as string[];
        const darkThemeIndex = classes.indexOf('dark-theme');
        
        if (isDark && darkThemeIndex === -1) {
          classes.push('dark-theme');
        } else if (!isDark && darkThemeIndex !== -1) {
          classes.splice(darkThemeIndex, 1);
        }
      });

      snackBarRef.afterDismissed().subscribe(() => {
        sub.unsubscribe();
      });
    }
  }
} 