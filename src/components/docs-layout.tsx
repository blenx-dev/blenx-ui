import type { ReactNode } from "react";
import { Box, Container, HStack } from "@/components/ui";
import { DocsSidebar } from "./docs-sidebar";

function DocsLayout({ children }: { children: ReactNode }) {
	return (
		<Container paddingX="xlarge">
			<HStack gap="xxlarge">
				<DocsSidebar />
				<Box grow>{children}</Box>
			</HStack>
		</Container>
	);
}

export { DocsLayout };
