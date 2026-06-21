import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { Box, HStack, IconButton, Surface, Text } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/theme/contract.stylex";
import { borderRadius, fontSize } from "@blenx-dev/ui/theme/tokens.stylex";
import * as stylex from "@stylexjs/stylex";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  highlightLines?: number[];
}

function escapeHtml(code: string): string {
  return `<pre class="shiki shiki themes"><code>${code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</code></pre>`;
}

const styles = stylex.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    backgroundColor: theme.surface,
    borderBottom: `1px solid ${theme.borderSubtle}`,
    borderRadius: `${borderRadius.medium} ${borderRadius.medium} 0 0`,
    fontSize: fontSize.xsmall,
    color: theme.contentSecondary,
  },
  scroll: {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
  },
  copyButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});

function CodeBlock({
  code,
  language = "typescript",
  title,
  highlightLines: _highlightLines,
}: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    highlightCode(code, language).then((html) => {
      if (mountedRef.current) {
        setHighlighted(html);
      }
    });
    return () => {
      mountedRef.current = false;
    };
  }, [code, language]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <Surface variant="sunken" borderRadius="medium">
      <HStack
        align="center"
        justify="between"
        paddingLeft="small"
        paddingY="xxsmall"
        paddingRight="xxsmall"
      >
        <Text variant="h6" color="secondary">
          {title ? title : null}
        </Text>
        <IconButton
          padding="none"
          intent={copied ? "primary" : "neutral"}
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
        </IconButton>
      </HStack>
      <Box
        style={styles.scroll}
        render={<div />}
        dangerouslySetInnerHTML={{
          __html: highlighted ?? escapeHtml(code),
        }}
      />
    </Surface>
  );
}

export { CodeBlock };
export type { CodeBlockProps };
