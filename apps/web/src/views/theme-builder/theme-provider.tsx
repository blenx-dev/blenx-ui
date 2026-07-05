import type { ReactNode } from "react";
import { useMemo } from "react";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { tokenVarsDefaults } from "@blenx-dev/theme/tokens";
import { useThemeBuilder } from "./theme-builder-context";

type LeafVarEntry = [cssVarName: string, fullPath: string];

function extractLeafVars(obj: Record<string, unknown>, path: string[] = []): LeafVarEntry[] {
  const result: LeafVarEntry[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && typeof value === "object") {
      result.push(...extractLeafVars(value as Record<string, unknown>, [...path, key]));
    } else if (typeof value === "string") {
      const cssVarName = value.replace(/^var\(|\)$/g, "");
      result.push([cssVarName, [...path, key].join(".")]);
    }
  }
  return result;
}

function flattenTokens(
  obj: Record<string, unknown>,
  path: string[] = [],
): Array<[fullPath: string, value: string]> {
  const result: Array<[string, string]> = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      result.push(...flattenTokens(value as Record<string, unknown>, [...path, key]));
    } else if (typeof value === "string") {
      result.push([[...path, key].join("."), value]);
    }
  }
  return result;
}

export function ThemePreviewProvider({ children }: { children: ReactNode }) {
  const tokens = useThemeBuilder((s) => s.tokens);

  const cssVars = useMemo(() => {
    const vars: Record<string, string> = {};

    const leafMap = new Map<string, string>();
    for (const [cssVar, fullPath] of extractLeafVars(semanticVars as Record<string, unknown>)) {
      leafMap.set(fullPath, cssVar);
    }

    for (const [fullPath, value] of flattenTokens(tokens as unknown as Record<string, unknown>)) {
      const cssVar = leafMap.get(fullPath);
      if (cssVar && value) {
        vars[cssVar] = value;
      }
    }

    vars[tokenVars.font.sans.replace(/^var\(|\)$/g, "")] = tokenVarsDefaults.font.sans;
    vars[tokenVars.font.body.replace(/^var\(|\)$/g, "")] = tokenVarsDefaults.font.body;
    vars[tokenVars.font.mono.replace(/^var\(|\)$/g, "")] = tokenVarsDefaults.font.mono;

    return vars;
  }, [tokens]);

  return <div style={cssVars as React.CSSProperties}>{children}</div>;
}
