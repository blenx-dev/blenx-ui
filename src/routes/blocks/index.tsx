import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import { Box, Separator, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/blocks/")({
	component: BlocksHome,
});

function BlocksHome() {
	return (
		<VStack>
			<VStack gap="small">
				<DocHeading variant="h1">Blenx UI Blocks</DocHeading>
				<Text variant="body2" color="secondary">
					Ready-to-use page-level blocks built with Blenx UI components.
				</Text>
			</VStack>

			<Separator />

			<VStack>
				<Box>
					<DocHeading variant="h2">Browse Blocks</DocHeading>
					<Text variant="body2" color="secondary">
						Select a category from the sidebar to browse available blocks.
					</Text>
				</Box>
			</VStack>
		</VStack>
	);
}
