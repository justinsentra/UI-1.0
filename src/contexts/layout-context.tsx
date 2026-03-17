import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export enum SidebarPosition {
  LEFT = "left",
  RIGHT = "right",
  LEFT_SECONDARY = "left-secondary",
  RIGHT_SECONDARY = "right-secondary",
}

export interface SidebarInfo {
  position: SidebarPosition;
  open?: boolean;
  width?: number;
}

interface SidebarConfig {
  sidebars: SidebarInfo[];
}

interface LayoutContextType {
  getSidebars: () => SidebarInfo[];
  hasSidebar: (position: SidebarPosition) => boolean;
  getOpenSidebar: (position: SidebarPosition) => SidebarInfo | undefined;
  registerSidebar: (sidebar: SidebarInfo) => void;
  unregisterSidebar: (position: SidebarPosition) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<SidebarConfig>({ sidebars: [] });

  const registerSidebar = useCallback((sidebar: SidebarInfo) => {
    setConfig((prev) => ({
      sidebars: [
        ...prev.sidebars.filter((s) => s.position !== sidebar.position),
        sidebar,
      ],
    }));
  }, []);

  const unregisterSidebar = useCallback((position: SidebarPosition) => {
    setConfig((prev) => ({
      sidebars: prev.sidebars.filter((s) => s.position !== position),
    }));
  }, []);

  const getSidebars = useCallback(
    (): SidebarInfo[] => config.sidebars,
    [config.sidebars],
  );

  const hasSidebar = useCallback(
    (position: SidebarPosition): boolean =>
      config.sidebars.some((s) => s.position === position),
    [config.sidebars],
  );

  const getOpenSidebar = useCallback(
    (position: SidebarPosition): SidebarInfo | undefined =>
      config.sidebars.find((s) => s.position === position && s.open),
    [config.sidebars],
  );

  const contextValue: LayoutContextType = useMemo(
    () => ({
      getSidebars,
      hasSidebar,
      getOpenSidebar,
      registerSidebar,
      unregisterSidebar,
    }),
    [getSidebars, hasSidebar, getOpenSidebar, registerSidebar, unregisterSidebar],
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

/**
 * Hook for pages to register a sidebar with the layout.
 * Automatically cleans up on unmount.
 */
export function useRegisterSidebar(sidebar: SidebarInfo) {
  const { registerSidebar, unregisterSidebar } = useLayout();

  useEffect(() => {
    registerSidebar(sidebar);
    return () => unregisterSidebar(sidebar.position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebar.position, sidebar.open, sidebar.width, registerSidebar, unregisterSidebar]);
}
