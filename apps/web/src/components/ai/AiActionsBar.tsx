import { CopySimpleIcon, ChatCircleTextIcon, RobotIcon } from "@phosphor-icons/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button, HStack, Popover, PopoverTrigger, PopoverPopup, VStack } from "@blenx-dev/core";
import { generateChatGPTUrl, generateClaudeUrl, generatePrompt } from "@/lib/ai";

interface AiActionsBarProps {
  componentTitle: string;
  aiUrl: string;
}

const mobileBreakpoint = "only screen and (max-width: 768px)";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
function AiActionsBarButtons({
  componentTitle,
  aiUrl,
  isMobile,
}: AiActionsBarProps & {
  isMobile?: boolean;
}) {
  const baseUrl = "https://blenx.dev";
  const fullAiUrl = `${baseUrl}${aiUrl}`;

  const explainPrompt = generatePrompt("explain", componentTitle, fullAiUrl);
  const chatGptUrl = generateChatGPTUrl(explainPrompt);
  const claudeUrl = generateClaudeUrl(explainPrompt);
  function openUrl(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <>
      <Button
        size="xs"
        intent="neutral"
        {...(isMobile ? { variant: "ghost" } : {})}
        onClick={() => copyToClipboard(fullAiUrl)}
      >
        <CopySimpleIcon size={16} />
        Copy Markdown URL
      </Button>
      <Button
        size="xs"
        {...(isMobile ? { variant: "ghost" } : {})}
        intent="neutral"
        onClick={() => openUrl(chatGptUrl)}
      >
        <ChatCircleTextIcon size={16} />
        Open in ChatGPT
      </Button>
      <Button
        size="xs"
        intent="neutral"
        {...(isMobile ? { variant: "ghost" } : {})}
        onClick={() => openUrl(claudeUrl)}
      >
        <RobotIcon size={16} />
        Open in Claude
      </Button>
      <Button
        size="xs"
        {...(isMobile ? { variant: "ghost" } : {})}
        intent="neutral"
        onClick={() => copyToClipboard(explainPrompt)}
      >
        <CopySimpleIcon size={16} />
        Copy AI Prompt
      </Button>
    </>
  );
}
function AiActionsBar({ componentTitle, aiUrl }: AiActionsBarProps) {
  const isMobile = useMediaQuery(mobileBreakpoint);

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger
          render={
            <Button size="xs" intent="neutral">
              AI Actions
            </Button>
          }
        />
        <PopoverPopup>
          <VStack>
            <AiActionsBarButtons isMobile componentTitle={componentTitle} aiUrl={aiUrl} />
          </VStack>
        </PopoverPopup>
      </Popover>
    );
  }

  return (
    <HStack gap="sm">
      <AiActionsBarButtons componentTitle={componentTitle} aiUrl={aiUrl} />
    </HStack>
  );
}

export { AiActionsBar };
