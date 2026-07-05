import type { SemanticTokens } from "@blenx-dev/theme";
import { create } from "zustand";
import { createContext } from "zustand-utils";

export type ThemeTokenGroup = keyof SemanticTokens;
export type ThemeTokenValue = string;
export type ThemeTokens = SemanticTokens;

export const defaultTokens: SemanticTokens = {
  background: {
    default: "#F7F4EE",
    subtle: "#ECE8E0",
  },
  surface: {
    default: "#FFFFFF",
    raised: "#FEFCFA",
    overlay: "rgba(0,0,0,0.4)",
    floating: "#FFFFFF",
  },
  text: {
    primary: "#223042",
    secondary: "#5A6878",
    disabled: "#A9B2BD",
    inverse: "#FFFFFF",
  },
  border: {
    default: "#D6DDE5",
    subtle: "#E7EBF0",
    strong: "#B8C2CF",
  },
  color: {
    primary: {
      default: "#243142",
      hover: "#1B2533",
      active: "#0F1820",
      bg: "#E8EDF3",
      bgHover: "#D6DDE5",
      bgActive: "#C5D0DB",
      fg: "#FFFFFF",
      text: "#D97706",
      textActive: "#C06B04",
      border: "#243142",
    },
    secondary: {
      default: "#C9822A",
      hover: "#B07020",
      active: "#9E5E19",
      bg: "#FDF3E8",
      bgHover: "#FCE7D1",
      bgActive: "#FBDCBA",
      fg: "#FFFFFF",
      text: "#C9822A",
      textActive: "#B07020",
      border: "#C9822A",
    },
    neutral: {
      default: "#6B7280",
      hover: "#5A6673",
      active: "#495560",
      bg: "#E8EDF3",
      bgHover: "#D6DDE5",
      bgActive: "#C5D0DB",
      fg: "#FFFFFF",
      text: "#6B7280",
      textActive: "#5A6673",
      border: "#6B7280",
    },
    success: {
      default: "#27AE60",
      hover: "#219A52",
      active: "#1E8449",
      bg: "#EAFAF1",
      bgHover: "#D4F5E3",
      bgActive: "#BEF0D5",
      fg: "#FFFFFF",
      text: "#27AE60",
      textActive: "#219A52",
      border: "#27AE60",
    },
    warning: {
      default: "#F39C12",
      hover: "#E08E0B",
      active: "#C9770A",
      bg: "#FEF9E7",
      bgHover: "#FDF3D0",
      bgActive: "#FCEDB9",
      fg: "#FFFFFF",
      text: "#F39C12",
      textActive: "#E08E0B",
      border: "#F39C12",
    },
    danger: {
      default: "#D63031",
      hover: "#C0392B",
      active: "#A93226",
      bg: "#FFEAEA",
      bgHover: "#FFD5D5",
      bgActive: "#FFC0C0",
      fg: "#FFFFFF",
      text: "#D63031",
      textActive: "#C0392B",
      border: "#D63031",
    },
    info: {
      default: "#2980B9",
      hover: "#2471A3",
      active: "#1F618D",
      bg: "#EBF5FB",
      bgHover: "#D7EBF7",
      bgActive: "#C3E1F3",
      fg: "#FFFFFF",
      text: "#2980B9",
      textActive: "#2471A3",
      border: "#2980B9",
    },
  },
  focus: {
    ring: "#4A90D9",
  },
};

interface ThemeBuilderStore {
  tokens: ThemeTokens;
  updateToken: (group: ThemeTokenGroup, key: string, value: ThemeTokenValue) => void;
  updateTokenDebounced: (group: ThemeTokenGroup, key: string, value: ThemeTokenValue) => void;
  setTokens: (tokens: ThemeTokens) => void;
  resetTokens: () => void;
  selectedToken: string | null;
  setSelectedToken: (token: string | null) => void;
}

const debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

function createThemeBuilderStore() {
  return create<ThemeBuilderStore>((set) => ({
    tokens: structuredClone(defaultTokens),
    selectedToken: null,

    setSelectedToken: (token) => set({ selectedToken: token }),

    updateToken: (group, key, value) => {
      const timer = debounceTimers.get(`${group}.${key}`);
      if (timer) {
        clearTimeout(timer);
        debounceTimers.delete(`${group}.${key}`);
      }
      set((state) => {
        const updated = structuredClone(state.tokens);
        const groupObj = updated[group] as Record<string, unknown>;
        const parts = key.split(".");
        if (parts.length === 1) {
          (groupObj as Record<string, string>)[key] = value;
        } else {
          const [parent, child] = parts;
          const parentObj = { ...(groupObj[parent] as Record<string, string>) };
          parentObj[child] = value;
          groupObj[parent] = parentObj;
        }
        return { tokens: updated };
      });
    },

    updateTokenDebounced: (group, key, value) => {
      const timerKey = `${group}.${key}`;
      const timer = debounceTimers.get(timerKey);
      if (timer) clearTimeout(timer);
      debounceTimers.set(
        timerKey,
        setTimeout(() => {
          debounceTimers.delete(timerKey);
          set((state) => {
            const updated = structuredClone(state.tokens);
            const groupObj = updated[group] as Record<string, unknown>;
            const parts = key.split(".");
            if (parts.length === 1) {
              (groupObj as Record<string, string>)[key] = value;
            } else {
              const [parent, child] = parts;
              const parentObj = { ...(groupObj[parent] as Record<string, string>) };
              parentObj[child] = value;
              groupObj[parent] = parentObj;
            }
            return { tokens: updated };
          });
        }, 16),
      );
    },

    setTokens: (tokens) => {
      set({ tokens: structuredClone(tokens) });
    },

    resetTokens: () => {
      set({ tokens: structuredClone(defaultTokens) });
    },
  }));
}

const { Provider, useStore, useStoreApi } =
  createContext<ReturnType<typeof createThemeBuilderStore>>();

export function ThemeBuilderProvider({ children }: { children: React.ReactNode }) {
  return <Provider createStore={createThemeBuilderStore}>{children}</Provider>;
}

export { useStore as useThemeBuilder, useStoreApi as useThemeBuilderApi };
