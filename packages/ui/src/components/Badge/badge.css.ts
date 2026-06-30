import { createVar, style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const badgeVars = {
  bg: createVar(),
  fg: createVar(),
  borderColor: createVar(),
};

export const badgeBase = style({
  display: "inline-block",
  padding: tokenVars.spacing.xs,
  borderRadius: tokenVars.borderRadius.default,
  fontSize: 12,
  lineHeight: 1.2,
  border: "1px solid transparent",
});

export const badgeSolid = style({
  backgroundColor: badgeVars.bg,
  color: badgeVars.fg,
  borderColor: badgeVars.borderColor,
});

export const badgeOutline = style({
  backgroundColor: "transparent",
  color: badgeVars.fg,
  borderColor: badgeVars.borderColor,
});

export const badgeSoft = style({
  backgroundColor: `color-mix(in srgb, ${badgeVars.bg} 25%, transparent)`,
  color: badgeVars.fg,
  borderColor: "transparent",
});

export const badgeDefault = style({
  vars: {
    [badgeVars.bg]: semanticVars.surface.raised,
    [badgeVars.fg]: semanticVars.text.primary,
    [badgeVars.borderColor]: semanticVars.border.default,
  },
});

export const badgePrimary = style({
  vars: {
    [badgeVars.bg]: semanticVars.interactive.primary,
    [badgeVars.fg]: semanticVars.interactive.primaryFg,
    [badgeVars.borderColor]: semanticVars.interactive.primary,
  },
});

export const badgeSecondary = style({
  vars: {
    [badgeVars.bg]: semanticVars.interactive.secondary,
    [badgeVars.fg]: semanticVars.interactive.secondaryFg,
    [badgeVars.borderColor]: semanticVars.interactive.secondary,
  },
});

export const badgeSuccess = style({
  vars: {
    [badgeVars.bg]: semanticVars.status.success,
    [badgeVars.fg]: semanticVars.text.inverse,
    [badgeVars.borderColor]: semanticVars.status.success,
  },
});

export const badgeDanger = style({
  vars: {
    [badgeVars.bg]: semanticVars.status.danger,
    [badgeVars.fg]: semanticVars.text.inverse,
    [badgeVars.borderColor]: semanticVars.status.danger,
  },
});

const variantStyles: Record<string, string> = {
  default: badgeDefault,
  primary: badgePrimary,
  secondary: badgeSecondary,
  success: badgeSuccess,
  danger: badgeDanger,
};

const appearanceStyles: Record<string, string> = {
  solid: badgeSolid,
  outline: badgeOutline,
  soft: badgeSoft,
};

export function getBadgeStyles(variant: string, appearance: string): string {
  const base = badgeBase;
  const v = variantStyles[variant] ?? badgeDefault;
  const a = appearanceStyles[appearance] ?? badgeSolid;
  return `${base} ${v} ${a}`;
}
