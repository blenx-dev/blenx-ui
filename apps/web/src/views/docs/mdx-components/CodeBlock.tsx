import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { Box, CopyButton, HStack, Surface, Text } from "@blenx-dev/ui/components";
import { codeScroll } from "@/lib/styles.css";

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

function CodeBlock({
  code,
  language = "typescript",
  title,
  highlightLines: _highlightLines,
}: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);
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
    navigator.clipboard.writeText(code).then(() => {});
  }, [code]);

  return (
    <Surface variant="sunken" borderRadius="medium" position="relative" paddingRight="xlarge">
      {title ? (
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
        </HStack>
      ) : null}
      <Box position="absolute" top="xsmall" right="xsmall">
        <CopyButton p="none" onClick={handleCopy} />
      </Box>
      <Box
        className={codeScroll}
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
