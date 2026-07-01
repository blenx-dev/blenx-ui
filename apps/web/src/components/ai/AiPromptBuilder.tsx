import { useState } from "react";
import { CopySimpleIcon } from "@phosphor-icons/react";
import { Box, Button, HStack, Separator, Text, VStack } from "@blenx-dev/core";
import { generatePrompt, promptTypeLabels, promptTypeDescriptions } from "@/lib/ai";
import type { PromptType } from "@/lib/ai";

const promptTypes: PromptType[] = [
  "explain",
  "customize",
  "build-example",
  "troubleshoot",
  "accessibility-review",
  "compare",
];

interface AiPromptBuilderProps {
  componentTitle: string;
  aiUrl: string;
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function AiPromptBuilder({ componentTitle, aiUrl }: AiPromptBuilderProps) {
  const baseUrl = "https://blenx.dev";
  const fullAiUrl = `${baseUrl}${aiUrl}`;
  const [selectedType, setSelectedType] = useState<PromptType>("explain");
  const [question, setQuestion] = useState("");

  const prompt = generatePrompt(selectedType, componentTitle, fullAiUrl);

  const customizedPrompt = question ? `${prompt}\n\nQuestion:\n${question}` : prompt;

  return (
    <VStack gap="md">
      <Text variant="h4">AI Prompt Builder</Text>
      <Text variant="body2" color="secondary">
        Generate a ready-to-use prompt for your preferred AI assistant.
      </Text>

      <Box>
        <HStack gap="sm" wrap>
          {promptTypes.map((type) => (
            <Button
              key={type}
              size="xs"
              variant={selectedType === type ? "solid" : "ghost"}
              intent={selectedType === type ? "primary" : "neutral"}
              onClick={() => setSelectedType(type)}
            >
              {promptTypeLabels[type]}
            </Button>
          ))}
        </HStack>
      </Box>

      <Separator />

      <Box>
        <Text variant="body2" color="secondary">
          {promptTypeDescriptions[selectedType]}
        </Text>
      </Box>

      <Box
        render={
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Optional: add a specific question or context..."
            rows={3}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid var(--border-color, #d4d4d8)",
              borderRadius: "8px",
              fontSize: "14px",
              fontFamily: "inherit",
              resize: "vertical",
            }}
          />
        }
      />

      <Box
        render={
          <pre
            style={{
              background: "#f4f4f5",
              border: "1px solid #e4e4e7",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "13px",
              lineHeight: "1.6",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              maxHeight: "300px",
              overflowY: "auto",
            }}
          >
            {customizedPrompt}
          </pre>
        }
      />

      <Button
        size="sm"
        variant="solid"
        intent="primary"
        onClick={() => copyToClipboard(customizedPrompt)}
      >
        <CopySimpleIcon size={16} />
        Copy Prompt
      </Button>
    </VStack>
  );
}

export { AiPromptBuilder };
