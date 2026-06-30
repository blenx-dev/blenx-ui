import { SidebarIcon, X } from "@phosphor-icons/react";
import {
  Accordion,
  Box,
  IconButton,
  ScrollArea,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Sheet,
  SheetPopup,
} from "@blenx-dev/ui";
import { ColorControls, NonColorControls, PresetControls, TypographyControls } from "./controls";
import { PreviewErrorBoundary } from "./error-boundary";
import { ExportPanel } from "./export";
import { ImpactSummary } from "./impact-map";
import { ComponentShowcase, ExampleDashboard } from "./preview";
import { HowItWorks, TokenTable } from "./ve-showcase";
import { ThemeBuilderProvider, useThemeBuilder } from "./theme-builder-context";
import { ThemePreviewProvider } from "./theme-provider";
import { ClientOnly } from "@tanstack/react-router";

function SidebarContent() {
  return (
    <Accordion.Root defaultValue={["presets", "colors", "typography", "noncolor", "export"]}>
      <PresetControls />
      <ColorControls />
      <TypographyControls />
      <NonColorControls />
      <ExportPanel />
      <TokenTable />
      <HowItWorks />
    </Accordion.Root>
  );
}

function ThemeBuilderInner() {
  const sidebarOpen = useThemeBuilder((s) => s.sidebarOpen);
  const toggleSidebar = useThemeBuilder((s) => s.toggleSidebar);
  const setSidebarOpen = useThemeBuilder((s) => s.setSidebarOpen);

  return (
    <ThemePreviewProvider>
      <Box position="relative" style={{ height: "90svh", overflow: "hidden" }}>
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetPopup>
            <Box padding="sm" style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton variant="ghost" onClick={toggleSidebar} aria-label="Close sidebar">
                <X size={16} />
              </IconButton>
            </Box>
            <ScrollArea style={{ flex: 1 }}>
              <SidebarContent />
            </ScrollArea>
          </SheetPopup>
        </Sheet>

        <Box>
          <Box padding="sm">
            {!sidebarOpen && (
              <IconButton variant="ghost" onClick={toggleSidebar} aria-label="Open sidebar">
                <SidebarIcon size={16} />
              </IconButton>
            )}
          </Box>

          <ScrollArea height="calc(90svh - 52px)">
            <Box paddingX="xl">
              <Tabs defaultValue="showcase">
                <TabsList>
                  <TabsTab value="showcase">Components</TabsTab>
                  <TabsTab value="dashboard">Dashboard</TabsTab>
                  <TabsTab value="inspector">Variables</TabsTab>
                </TabsList>
                <TabsPanel value="showcase">
                  <PreviewErrorBoundary>
                    <ComponentShowcase />
                  </PreviewErrorBoundary>
                </TabsPanel>
                <TabsPanel value="dashboard">
                  <PreviewErrorBoundary>
                    <ExampleDashboard />
                  </PreviewErrorBoundary>
                </TabsPanel>
                <TabsPanel value="inspector">
                  <ImpactSummary />
                  <TokenTable />
                  <HowItWorks />
                </TabsPanel>
              </Tabs>
            </Box>
          </ScrollArea>
        </Box>
      </Box>
    </ThemePreviewProvider>
  );
}

export function ThemeBuilderPage() {
  return (
    <ThemeBuilderProvider>
      <ClientOnly>
        <ThemeBuilderInner />
      </ClientOnly>
    </ThemeBuilderProvider>
  );
}
