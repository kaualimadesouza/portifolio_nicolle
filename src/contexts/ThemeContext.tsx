import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemeMode = 'auto' | 'manual';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getThemeByTime(): Theme {
  const hour = new Date().getHours();
  // 6am (6) to 6pm (18) = light, otherwise dark
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [themeMode, setThemeModeState] = useState<ThemeMode>('auto');
  const [mounted, setMounted] = useState(false);

  // Inicializa o tema após a montagem (client-side only)
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null;
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedMode === 'manual' && savedTheme) {
      setThemeModeState('manual');
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Auto mode based on time
      setThemeModeState('auto');
      const autoTheme = getThemeByTime();
      setTheme(autoTheme);
      if (autoTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    setMounted(true);
  }, []);

  // Auto-update theme every minute when in auto mode
  useEffect(() => {
    if (!mounted || themeMode !== 'auto') return;

    const interval = setInterval(() => {
      const autoTheme = getThemeByTime();
      setTheme(autoTheme);
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [mounted, themeMode]);

  // Atualiza a classe e localStorage quando o tema muda
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('theme', theme);
    localStorage.setItem('themeMode', themeMode);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, themeMode, mounted]);

  const toggleTheme = () => {
    setThemeModeState('manual');
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    if (mode === 'auto') {
      setTheme(getThemeByTime());
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
