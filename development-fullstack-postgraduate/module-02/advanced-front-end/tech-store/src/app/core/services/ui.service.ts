import { Injectable, signal, computed, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface UIState {
  isDarkTheme: boolean;
  isWideScreen: boolean;
  isSidenavOpen: boolean;
  scrollPosition: number;
  isLoading: boolean;
}

const INITIAL_STATE: UIState = {
  isDarkTheme: false,
  isWideScreen: typeof window !== 'undefined' ? window.innerWidth >= 960 : false,
  isSidenavOpen: false,
  scrollPosition: 0,
  isLoading: false
};

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly localStorage = inject(LocalStorageService);

  private state = signal<UIState>({
    ...INITIAL_STATE,
    isDarkTheme: this.loadThemePreference()
  });

  // Computed values
  readonly isDarkTheme = computed(() => this.state().isDarkTheme);
  readonly isWideScreen = computed(() => this.state().isWideScreen);
  readonly isSidenavOpen = computed(() => this.state().isSidenavOpen);
  readonly scrollPosition = computed(() => this.state().scrollPosition);
  readonly isLoading = computed(() => this.state().isLoading);
  readonly showScrollTop = computed(() => this.state().scrollPosition > 500);

  // Observable for components that need to react to theme changes
  private themeChange = new BehaviorSubject<boolean>(this.state().isDarkTheme);
  themeChange$ = this.themeChange.asObservable();

  constructor() {
    // Initialize theme
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.state().isDarkTheme);
    }
  }

  toggleTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.state.update(state => ({
      ...state,
      isDarkTheme: !state.isDarkTheme
    }));
    this.applyTheme(this.state().isDarkTheme);
    this.themeChange.next(this.state().isDarkTheme);
  }

  setLoading(isLoading: boolean): void {
    this.state.update(state => ({
      ...state,
      isLoading
    }));
  }

  updateScrollPosition(position: number): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.state.update(state => ({
      ...state,
      scrollPosition: position
    }));
  }

  toggleSidenav(): void {
    this.state.update(state => ({
      ...state,
      isSidenavOpen: !state.isSidenavOpen
    }));
  }

  updateScreenSize(isWide: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.state.update(state => ({
      ...state,
      isWideScreen: isWide
    }));
  }

  private loadThemePreference(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;

    const savedTheme = this.localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(isDark: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;

    document.body.classList.toggle('dark-theme', isDark);
    this.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
} 