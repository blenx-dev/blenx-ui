import type { AiComponentMeta, AiPage } from "./types";

export function generateAIMarkdown(meta: AiComponentMeta): string {
  const lines: string[] = [];

  lines.push(`# ${meta.title}`);
  lines.push("");
  lines.push(meta.description);
  lines.push("");
  lines.push(`- **Package:** \`${meta.package}\``);
  lines.push(`- **Category:** ${meta.category}`);
  lines.push(`- **Status:** ${meta.status}`);
  if (meta.keywords.length > 0) {
    lines.push(`- **Keywords:** ${meta.keywords.join(", ")}`);
  }
  lines.push("");

  if (meta.install) {
    lines.push("## Installation");
    lines.push("");
    lines.push("```bash");
    lines.push(meta.install);
    lines.push("```");
    lines.push("");
  }

  if (meta.imports.length > 0) {
    lines.push("## Imports");
    lines.push("");
    meta.imports.forEach((imp) => {
      lines.push("```tsx");
      lines.push(imp);
      lines.push("```");
      lines.push("");
    });
  }

  const proseSections = extractSectionsFromRaw(meta.sections);

  if (proseSections.overview) {
    lines.push("## Overview");
    lines.push("");
    lines.push(proseSections.overview);
    lines.push("");
  }

  if (proseSections.variants) {
    lines.push("## Variants");
    lines.push("");
    lines.push(proseSections.variants);
    lines.push("");
  }

  if (meta.examples.length > 0) {
    lines.push("## Examples");
    lines.push("");
    meta.examples.forEach((ex) => {
      if (ex.source) {
        if (meta.examples.length > 1) {
          lines.push(`### ${ex.name}`);
          lines.push("");
        }
        lines.push("```tsx");
        lines.push(ex.source.trim());
        lines.push("```");
        lines.push("");
      }
    });
  }

  if (meta.dependencies.length > 0) {
    lines.push("## Dependencies");
    lines.push("");
    meta.dependencies.forEach((dep) => {
      lines.push(`- ${dep}`);
    });
    lines.push("");
  }

  if (meta.files.length > 0) {
    lines.push("## Files");
    lines.push("");
    meta.files.forEach((file) => {
      lines.push(`- \`${file}\``);
    });
    lines.push("");
  }

  if (meta.accessibility.keyboard && meta.accessibility.keyboard.length > 0) {
    lines.push("## Accessibility");
    lines.push("");
    lines.push("### Keyboard Support");
    lines.push("");
    meta.accessibility.keyboard.forEach((key) => {
      lines.push(`- \`${key}\``);
    });
    lines.push("");
    if (meta.accessibility.aria && meta.accessibility.aria.length > 0) {
      lines.push("### ARIA Attributes");
      lines.push("");
      meta.accessibility.aria.forEach((attr) => {
        lines.push(`- \`${attr}\``);
      });
      lines.push("");
    }
  }

  if (proseSections.bestPractices) {
    lines.push("## Best Practices");
    lines.push("");
    lines.push(proseSections.bestPractices);
    lines.push("");
  }

  if (proseSections.commonMistakes) {
    lines.push("## Common Mistakes");
    lines.push("");
    lines.push(proseSections.commonMistakes);
    lines.push("");
  }

  if (meta.related.length > 0) {
    lines.push("## Related Components");
    lines.push("");
    meta.related.forEach((rel) => {
      lines.push(`- ${rel}`);
    });
    lines.push("");
  }

  return lines.join("\n");
}

interface ExtractedSections {
  overview: string;
  variants: string;
  bestPractices: string;
  commonMistakes: string;
}

function extractSectionsFromRaw(sections: Record<string, string>): ExtractedSections {
  return {
    overview: sections["overview"] ?? "",
    variants: sections["usage"] ?? sections["variants"] ?? "",
    bestPractices: "",
    commonMistakes: sections["limitations"] ?? "",
  };
}

export function generateLLMS(pages: AiPage[]): string {
  const lines: string[] = [];

  lines.push("# Blenx UI");
  lines.push("");
  lines.push("Design system built for React with Vanilla Extract.");
  lines.push("");
  lines.push("## Components");
  lines.push("");

  for (const page of pages) {
    lines.push(`- [${page.title}](/${page.slug}): ${page.description}`);
  }

  lines.push("");
  return lines.join("\n");
}

export function generateLLMSFull(pages: AiPage[]): string {
  const lines: string[] = [];

  lines.push("# Blenx UI");
  lines.push("");
  lines.push("Design system built for React with Vanilla Extract.");
  lines.push("");
  lines.push("---");
  lines.push("");

  for (const page of pages) {
    lines.push(page.markdown);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}
