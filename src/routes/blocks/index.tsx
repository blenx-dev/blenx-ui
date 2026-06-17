import { createFileRoute } from "@tanstack/react-router";
import { Box, Separator, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/blocks/")({
	component: BlocksHome,
});

function BlocksHome() {
	return (
		<VStack>
			<VStack gap="small">
				<Text variant="h1">Blenx UI Blocks</Text>
				<Text variant="body2" color="secondary">
					Ready-to-use page-level blocks built with Blenx UI components.
				</Text>
			</VStack>

			<Separator />

			<VStack>
				<Box>
					<Text variant="h2">Browse Blocks</Text>
					<Text variant="body2" color="secondary">
						Select a category from the sidebar to browse available blocks.
					</Text>
				</Box>
			</VStack>
		</VStack>
	);
}
