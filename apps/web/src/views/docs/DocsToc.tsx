"use client";

import { useCallback, useRef, useState } from "react";
import { Box, Container, CopyButton, Text, VStack } from "@blenx-dev/ui/components";
import type { TocItem } from "@/utils/extractHeadings";
import { HStack } from "@blenx-dev/ui";
import { useRouterState } from "@tanstack/react-router";
import { tocTitle } from "@/lib/styles.css";

interface DocsTocProps {
  items: TocItem[];
}

function useActiveHeading(): string {
  const activeId = useRouterState({
    select: (state) => state.location.hash,
  });

  return activeId;
}

/**
 * DocsToc – A page-specific table of contents.
 *
 * Renders H2 and H3 headings as nested links with scrollspy support
 * for active section highlighting.
 *
 * @example
 * ```tsx
 * <DocsToc items={doc.toc} />
 * ```
 *
 * Future enhancements (not implemented yet):
 * - Collapsible TOC groups
 * - Heading copy links
 * - Smooth scrolling
 * - Nested heading levels beyond H3
 */
export function DocsToc({ items }: DocsTocProps) {
  const activeId = useActiveHeading();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleClick = useCallback((slug: string, shouldCopy = false) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const url = new URL(globalThis.location.href);
      url.hash = slug;
      globalThis.history.replaceState({}, "", url.toString());
    }
    if (!shouldCopy) return;
    // Copy URL to clipboard on click (future deep linking)
    const url = new URL(globalThis.location.href);
    url.hash = slug;
    navigator.clipboard.writeText(url.toString());
    setCopiedId(slug);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopiedId(null), 2000);
  }, []);
  if (items.length === 0) return null;

  return (
    <Container size="xxs" centered render={<aside />} aria-label="On this page">
      <Text variant="caption" className={tocTitle}>
        On this page
      </Text>
      <Box render={<nav />} aria-label="Table of contents">
        <VStack gap="none">
          {items.map((item) => {
            const isActive = item.slug === activeId;
            return (
              <HStack render={<li />} key={item.slug} justify="between" align="center">
                <Text
                  color={isActive ? "primary" : "secondary"}
                  render={
                    <a
                      href={`#${item.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.slug);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      title={copiedId === item.slug ? "Copied!" : `Navigate to ${item.title}`}
                    />
                  }
                >
                  {item.title}
                </Text>
                <CopyButton
                  padding="none"
                  variant="ghost"
                  color="secondary"
                  onClick={() => {
                    handleClick(item.slug, true);
                  }}
                />
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </Container>
  );
}
