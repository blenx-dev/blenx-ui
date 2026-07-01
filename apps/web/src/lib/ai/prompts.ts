import type { PlatformConfig, PromptType } from "./types";

export const platforms: PlatformConfig[] = [
  {
    name: "chatgpt",
    label: "ChatGPT",
    baseUrl: "https://chat.openai.com",
    queryParam: "q",
  },
  {
    name: "claude",
    label: "Claude",
    baseUrl: "https://claude.ai/new",
    queryParam: "q",
  },
  {
    name: "perplexity",
    label: "Perplexity",
    baseUrl: "https://www.perplexity.ai/search",
    queryParam: "q",
  },
  {
    name: "gemini",
    label: "Gemini",
    baseUrl: "https://gemini.google.com/new",
    queryParam: "q",
  },
];

const promptTemplates: Record<PromptType, string> = {
  explain: `Read

{aiUrl}

Use it as the source of truth.

Explain how {componentName} works, including its props, variants, and accessibility features.`,
  customize: `Read

{aiUrl}

Use it as the source of truth.

I want to customize {componentName}. Show me how to change its variants, sizes, and intents with code examples.`,
  "build-example": `Read

{aiUrl}

Use it as the source of truth.

Build a complete example using {componentName}. Include proper imports, state management, and best practices.`,
  troubleshoot: `Read

{aiUrl}

Use it as the source of truth.

I'm having trouble with {componentName}. What are common mistakes and how do I fix them?`,
  "accessibility-review": `Read

{aiUrl}

Use it as the source of truth.

Review the accessibility of {componentName}. What keyboard interactions and ARIA attributes does it support? How do I use them correctly?`,
  compare: `Read

{aiUrl}

Use it as the source of truth.

Compare {componentName} with {otherComponent}. What are the key differences in API, use cases, and behavior?`,
};

export function generatePrompt(
  type: PromptType,
  componentName: string,
  aiUrl: string,
  otherComponent?: string,
): string {
  let template = promptTemplates[type];
  if (!template) {
    template = promptTemplates.explain;
  }
  return template
    .replace(/\{componentName\}/g, componentName)
    .replace(/\{aiUrl\}/g, aiUrl)
    .replace(/\{otherComponent\}/g, otherComponent ?? "similar component");
}

export function generatePlatformUrl(platform: PlatformConfig, prompt: string): string {
  const encoded = encodeURIComponent(prompt);
  return `${platform.baseUrl}?${platform.queryParam}=${encoded}`;
}

export function generateChatGPTUrl(prompt: string): string {
  const chatgpt = platforms.find((p) => p.name === "chatgpt")!;
  return generatePlatformUrl(chatgpt, prompt);
}

export function generateClaudeUrl(prompt: string): string {
  const claude = platforms.find((p) => p.name === "claude")!;
  return generatePlatformUrl(claude, prompt);
}

export const promptTypeLabels: Record<PromptType, string> = {
  explain: "Explain this component",
  customize: "Customize this component",
  "build-example": "Build an example",
  troubleshoot: "Troubleshoot an issue",
  "accessibility-review": "Review accessibility",
  compare: "Compare with another component",
};

export const promptTypeDescriptions: Record<PromptType, string> = {
  explain: "Get a comprehensive explanation of the component",
  customize: "Learn how to customize the component's appearance",
  "build-example": "Generate a complete usage example",
  troubleshoot: "Find solutions to common problems",
  "accessibility-review": "Review keyboard and ARIA support",
  compare: "Compare this component with alternatives",
};
