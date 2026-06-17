import { ClientOnly, createFileRoute, Outlet } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import { DocsSidebar } from "@/components/docs-sidebar";
import {
	Box,
	Container,
	Drawer,
	DrawerClose,
	DrawerPanel,
	DrawerPopup,
	HStack,
	ScrollArea,
} from "@/components/ui";
import { useSidebarStore } from "@/stores/docs-sidebar";

export const Route = createFileRoute("/docs")({
	component: DocsLayout,
});

function DrawerSidebar() {
	const sidebarOpen = useSidebarStore((st) => st.isOpen);
	const setOpen = useSidebarStore((st) => st.setOpen);
	return (
		<Drawer open={sidebarOpen} onOpenChange={setOpen} position="left">
			<DrawerPopup>
				<DrawerPanel>
					<DrawerClose />
					<DocsSidebar />
				</DrawerPanel>
			</DrawerPopup>
		</Drawer>
	);
}
function RenderSidebarNavs() {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	return (
		<>
			{isSmallDevice ? (
				<DrawerSidebar />
			) : (
				<Container size="xxs">
					<DocsSidebar />
				</Container>
			)}
		</>
	);
}
function DocsLayout() {
	return (
		<Container paddingX="xxlarge">
			<HStack>
				<ClientOnly>
					<RenderSidebarNavs />
				</ClientOnly>
				<Box grow>
					<ScrollArea height="90svh">
						<Outlet />
					</ScrollArea>
				</Box>
			</HStack>
		</Container>
	);
}
