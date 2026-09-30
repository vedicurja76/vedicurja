'use client';
import { createContext, useContext, useState, useCallback, useRef, ReactNode } from 'react';

interface NavigationContextType {
  isNavigating: boolean;
  pageLoaderVisible: boolean;
  startNavigation: () => void;
  completeNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [pageLoaderVisible, setPageLoaderVisible] = useState(false);
  const loaderTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startNavigation = useCallback(() => {
    // Clear any existing timer
    if (loaderTimerRef.current) clearTimeout(loaderTimerRef.current);

    setIsNavigating(true);
    setPageLoaderVisible(true);

    // Minimum 2.5 seconds display
    loaderTimerRef.current = setTimeout(() => {
      setPageLoaderVisible(false);
      setIsNavigating(false);
    }, 2500);
  }, []);

  const completeNavigation = useCallback(() => {
    // Called when page actually renders – but loader stays for minimum time
    setIsNavigating(false);
  }, []);

  return (
    <NavigationContext.Provider value={{ isNavigating, pageLoaderVisible, startNavigation, completeNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (!context) {
    return {
      isNavigating: false,
      pageLoaderVisible: false,
      startNavigation: () => {},
      completeNavigation: () => {},
    };
  }
  return context;
}
