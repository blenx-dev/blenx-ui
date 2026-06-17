import { lazy, Suspense, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { demoImports } from "@/docs-demo-registry";
import {
	Box,
	Separator,
	Surface,
	Text,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	VStack,
} from "@/components/ui";

interface BlockInfo {
	key: string;
	label: string;
	description: string;
	importPath: string;
	demoExport: string;
}

const BLOCKS: BlockInfo[] = [
	{
		key: "empty-state-01",
		label: "Empty State",
		description:
			"An empty state block for use when no data exists. Supports card and page variants with optional action buttons.",
		importPath: "@/components/blocks/empty-state-01/empty-state-01",
		demoExport: "EmptyState01Demo",
	},
	{
		key: "loading-state-01",
		label: "Loading State",
		description:
			"A loading/skeleton block for use while content is being fetched. Supports text, card, table, and avatar patterns.",
		importPath: "@/components/blocks/loading-state-01/loading-state-01",
		demoExport: "LoadingState01AllDemo",
	},
	{
		key: "error-state-01",
		label: "Error State",
		description:
			"An error state block for displaying errors with retry action and expandable debug details. Supports card, page, and toast variants.",
		importPath: "@/components/blocks/error-state-01/error-state-01",
		demoExport: "ErrorState01PageDemo",
	},
];

export const Route = createFileRoute("/blocks/application-states")({
	component: ApplicationStatesPage,
});

function BlockDemo({ block }: { block: BlockInfo }) {
	const importFn = demoImports[block.key];

	if (!importFn) {
		return (
			<Text variant="body2" color="secondary">
				Demo not available
			</Text>
		);
	}

	const DemoComponent = lazy(async () => {
		const mod = await importFn();
		const Component = (mod as Record<string, unknown>)[block.demoExport];
		if (typeof Component === "function") {
			return { default: Component as React.ComponentType };
		}
		return { default: () => <Text>Demo not found</Text> };
	});

	return (
		<Suspense
			fallback={
				<Text variant="body2" color="secondary">
					Loading demo...
				</Text>
			}
		>
			<DemoComponent />
		</Suspense>
	);
}

function ApplicationStatesPage() {
	const [currentBlock, setCurrentBlock] = useState(BLOCKS[0].key);

	return (
		<VStack gap="large">
			<VStack gap="small">
				<Text variant="h1">Application State Blocks</Text>
				<Text variant="body2" color="secondary">
					Blocks for communicating application states — empty, loading, and
					error.
				</Text>
			</VStack>

			<Separator tone="subtle" />

			<Tabs value={currentBlock} onValueChange={setCurrentBlock}>
				<TabsList>
					{BLOCKS.map((block) => (
						<TabsTab key={block.key} value={block.key}>
							{block.label}
						</TabsTab>
					))}
				</TabsList>

				{BLOCKS.map((block) => (
					<TabsPanel key={block.key} value={block.key}>
						<VStack gap="medium">
							<VStack gap="small">
								<Text variant="h2">{block.label}</Text>
								<Text variant="body2" color="secondary">
									{block.description}
								</Text>
							</VStack>

							<Surface padding="medium" variant="sunken">
								<BlockDemo block={block} />
							</Surface>

							<Separator tone="subtle" />

							<Box>
								<Text variant="body2" weight="semibold">
									Import
								</Text>
								<Surface render={<pre />} padding="small" variant="sunken">
									<code>{`import { ${block.demoExport.replace("Demo", "")} } from "${block.importPath}";`}</code>
								</Surface>
							</Box>
						</VStack>
					</TabsPanel>
				))}
			</Tabs>
		</VStack>
	);
}
