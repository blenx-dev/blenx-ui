import { createFileRoute } from "@tanstack/react-router";
import { ThemeBuilderPage } from "@/components/theme-builder/theme-builder-page";

export const Route = createFileRoute("/theme-builder")({
	component: ThemeBuilderRoute,
});

function ThemeBuilderRoute() {
	return <ThemeBuilderPage />;
}
