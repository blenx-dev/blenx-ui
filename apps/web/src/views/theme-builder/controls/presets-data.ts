import type { SemanticTokens } from "@blenx-dev/theme";

export interface ThemePreset {
  name: string;
  label: string;
  tokens: Partial<SemanticTokens>;
}

export const presets: ThemePreset[] = [
  {
    name: "default",
    label: "Blenx Default",
    tokens: {},
  },
  {
    name: "zinc-dark",
    label: "Zinc Dark",
    tokens: {
      background: { default: "#09090b", subtle: "#18181b" },
      surface: {
        default: "#09090b",
        raised: "#27272a",
        overlay: "rgba(0,0,0,0.8)",
        floating: "#18181b",
      },
      text: {
        primary: "#fafafa",
        secondary: "#a1a1aa",
        accent: "#3b82f6",
        disabled: "#52525b",
        inverse: "#09090b",
      },
      border: { default: "#27272a", subtle: "#18181b", strong: "#3f3f46" },
      interactive: {
        primary: { default: "#fafafa", hover: "#e4e4e7", active: "#d4d4d4" },
        primaryFg: "#09090b",
        primaryBg: { default: "#27272a", hover: "#3f3f46", active: "#52525b" },
        secondary: { default: "#3b82f6", hover: "#2563eb", active: "#1d4ed8" },
        secondaryFg: "#ffffff",
        secondaryBg: { default: "#1e3a5f", hover: "#1e3a5f", active: "#1e3a5f" },
        neutral: { default: "#52525b", hover: "#3f3f46", active: "#27272a" },
        neutralFg: "#fafafa",
      },
    },
  },
  {
    name: "vercel-light",
    label: "Vercel Light",
    tokens: {
      background: { default: "#ffffff", subtle: "#fafafa" },
      surface: {
        default: "#ffffff",
        raised: "#ffffff",
        overlay: "rgba(0,0,0,0.5)",
        floating: "#ffffff",
      },
      text: {
        primary: "#000000",
        secondary: "#666666",
        accent: "#0070f3",
        disabled: "#888888",
        inverse: "#ffffff",
      },
      border: { default: "#eaeaea", subtle: "#fafafa", strong: "#888888" },
      interactive: {
        primary: { default: "#000000", hover: "#333333", active: "#555555" },
        primaryFg: "#ffffff",
        primaryBg: { default: "#f5f5f5", hover: "#eaeaea", active: "#d4d4d4" },
        secondary: { default: "#0070f3", hover: "#0060df", active: "#0050c0" },
        secondaryFg: "#ffffff",
        secondaryBg: { default: "#ebf3fe", hover: "#d1e3fd", active: "#b8d4fc" },
        neutral: { default: "#888888", hover: "#666666", active: "#444444" },
        neutralFg: "#ffffff",
      },
    },
  },
  {
    name: "linear-dark",
    label: "Linear Dark",
    tokens: {
      background: { default: "#0E0F11", subtle: "#151618" },
      surface: {
        default: "#151618",
        raised: "#2B2D31",
        overlay: "rgba(0,0,0,0.7)",
        floating: "#1F2124",
      },
      text: {
        primary: "#F2F2F2",
        secondary: "#8A8F98",
        accent: "#5E6AD2",
        disabled: "#4C5058",
        inverse: "#0E0F11",
      },
      border: { default: "#2B2D31", subtle: "#1F2124", strong: "#3C3F44" },
      interactive: {
        primary: { default: "#E5E5E5", hover: "#D1D1D1", active: "#BCBCBC" },
        primaryFg: "#0E0F11",
        primaryBg: { default: "#2B2D31", hover: "#3C3F44", active: "#4C5058" },
        secondary: { default: "#5E6AD2", hover: "#4A56C0", active: "#3D47A0" },
        secondaryFg: "#ffffff",
        secondaryBg: { default: "#2D3160", hover: "#2D3160", active: "#2D3160" },
        neutral: { default: "#4C5058", hover: "#3C3F44", active: "#2B2D31" },
        neutralFg: "#F2F2F2",
      },
    },
  },
  {
    name: "supabase-dark",
    label: "Supabase Dark",
    tokens: {
      background: { default: "#1c1c1c", subtle: "#232323" },
      surface: {
        default: "#1c1c1c",
        raised: "#2e2e2e",
        overlay: "rgba(0,0,0,0.8)",
        floating: "#232323",
      },
      text: {
        primary: "#ededed",
        secondary: "#8b8b8b",
        accent: "#24b47e",
        disabled: "#4a4a4a",
        inverse: "#1c1c1c",
      },
      border: { default: "#2e2e2e", subtle: "#232323", strong: "#3e3e3e" },
      interactive: {
        primary: { default: "#24b47e", hover: "#3ecf8e", active: "#20916b" },
        primaryFg: "#ffffff",
        primaryBg: { default: "#1a3d2e", hover: "#1a3d2e", active: "#1a3d2e" },
        secondary: { default: "#ededed", hover: "#d1d1d1", active: "#b5b5b5" },
        secondaryFg: "#1c1c1c",
        secondaryBg: { default: "#2e2e2e", hover: "#2e2e2e", active: "#2e2e2e" },
        neutral: { default: "#4a4a4a", hover: "#3a3a3a", active: "#2a2a2a" },
        neutralFg: "#ededed",
      },
    },
  },
  {
    name: "github-dark",
    label: "GitHub Dark",
    tokens: {
      background: { default: "#0d1117", subtle: "#161b22" },
      surface: {
        default: "#0d1117",
        raised: "#21262d",
        overlay: "rgba(0,0,0,0.8)",
        floating: "#161b22",
      },
      text: {
        primary: "#c9d1d9",
        secondary: "#8b949e",
        accent: "#58a6ff",
        disabled: "#484f58",
        inverse: "#0d1117",
      },
      border: { default: "#30363d", subtle: "#21262d", strong: "#8b949e" },
      interactive: {
        primary: { default: "#c9d1d9", hover: "#b1bac4", active: "#8b949e" },
        primaryFg: "#0d1117",
        primaryBg: { default: "#21262d", hover: "#30363d", active: "#484f58" },
        secondary: { default: "#58a6ff", hover: "#388bfd", active: "#1f6feb" },
        secondaryFg: "#ffffff",
        secondaryBg: { default: "#1c3a5e", hover: "#1c3a5e", active: "#1c3a5e" },
        neutral: { default: "#484f58", hover: "#30363d", active: "#21262d" },
        neutralFg: "#c9d1d9",
      },
    },
  },
  {
    name: "nord",
    label: "Nord",
    tokens: {
      background: { default: "#2e3440", subtle: "#3b4252" },
      surface: {
        default: "#2e3440",
        raised: "#434c5e",
        overlay: "rgba(0,0,0,0.6)",
        floating: "#3b4252",
      },
      text: {
        primary: "#eceff4",
        secondary: "#d8dee9",
        accent: "#88c0d0",
        disabled: "#4c566a",
        inverse: "#2e3440",
      },
      border: { default: "#434c5e", subtle: "#3b4252", strong: "#4c566a" },
      interactive: {
        primary: { default: "#d8dee9", hover: "#e5e9f0", active: "#eceff4" },
        primaryFg: "#2e3440",
        primaryBg: { default: "#434c5e", hover: "#4c566a", active: "#5e6a7d" },
        secondary: { default: "#88c0d0", hover: "#8fbcbb", active: "#96b8b6" },
        secondaryFg: "#2e3440",
        secondaryBg: { default: "#3b4252", hover: "#3b4252", active: "#3b4252" },
        neutral: { default: "#4c566a", hover: "#434c5e", active: "#3b4252" },
        neutralFg: "#eceff4",
      },
      status: {
        success: { default: "#a3be8c", hover: "#8fbc8f", active: "#7ba87b" },
        successBg: "#3b4252",
        warning: { default: "#ebcb8b", hover: "#dbb870", active: "#cba555" },
        warningBg: "#3b4252",
        danger: { default: "#bf616a", hover: "#b0505a", active: "#a0404a" },
        dangerBg: "#3b4252",
        info: { default: "#5e81ac", hover: "#51729c", active: "#44638c" },
        infoBg: "#3b4252",
      },
      focus: { ring: "#81a1c1" },
    },
  },
];
