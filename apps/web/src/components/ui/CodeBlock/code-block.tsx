import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { Box, CopyButton, HStack, Surface } from "@blenx-dev/ui/components";

interface CodeBlockProps {
  code: string;
  language?: string;
}
function escapeHtml(code: string): string {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  return `<pre class="shiki shiki themes"><code>${code
    .replace(/&/g, amp)
    .replace(/</g, lt)
    .replace(/>/g, gt)}</code></pre>`;
}

function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
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
      setMenuOpen(false);
    });
  }, [code]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Box maxWidth={"90svw"}>
      <Surface variant="sunken" render={<pre />} borderColor="surface">
        <HStack justify="end" paddingTop="small" paddingRight="small">
          <CopyButton onClick={handleCopy} size="xsmall" />
        </HStack>
        <Box overflow="auto">
          <div
            dangerouslySetInnerHTML={{
              __html: highlighted ?? escapeHtml(code),
            }}
          />
        </Box>
      </Surface>
    </Box>
  );
}

export { CodeBlock };
export type { CodeBlockProps };
