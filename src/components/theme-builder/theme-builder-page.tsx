import { Text, VStack } from "@/components/ui";
import { ThemeBuilderProvider } from "./theme-builder-context";
import { ThemePreviewProvider } from "./theme-provider";

export function ThemeBuilderPage() {
	return (
		<ThemeBuilderProvider>
			<ThemePreviewProvider>
				<VStack padding="large" gap="medium">
					<Text variant="h1">Theme Builder</Text>
					<Text variant="body2" color="secondary">
						Customize your theme tokens and see live previews of components.
					</Text>
				</VStack>
			</ThemePreviewProvider>
		</ThemeBuilderProvider>
	);
}
