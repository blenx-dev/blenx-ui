export interface AiAccessibility {
  keyboard?: string[];
  aria?: string[];
}

export interface AiExample {
  name: string;
  source: string;
}

export interface AiComponentMeta {
  name: string;
  title: string;
  description: string;
  package: string;
  registryName: string;
  install: string;
  imports: string[];
  category: string;
  status: string;
  keywords: string[];
  related: string[];
  dependencies: string[];
  files: string[];
  accessibility: AiAccessibility;
  examples: AiExample[];
  sections: Record<string, string>;
}

export interface AiPage {
  slug: string;
  title: string;
  description: string;
  markdown: string;
}

export type PromptType =
  | "explain"
  | "customize"
  | "build-example"
  | "troubleshoot"
  | "accessibility-review"
  | "compare";

export interface PlatformConfig {
  name: string;
  label: string;
  baseUrl: string;
  queryParam: string;
}
