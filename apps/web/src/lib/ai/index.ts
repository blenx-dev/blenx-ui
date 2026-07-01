export type {
  AiAccessibility,
  AiComponentMeta,
  AiPage,
  AiExample,
  PlatformConfig,
  PromptType,
} from "./types";

export { generateAIMarkdown, generateLLMS, generateLLMSFull } from "./generate";
export {
  generatePrompt,
  generateChatGPTUrl,
  generateClaudeUrl,
  generatePlatformUrl,
  platforms,
  promptTypeLabels,
  promptTypeDescriptions,
} from "./prompts";
