import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Separator, Surface, Text, VStack } from "@/components/ui";
import { docStyles } from "./docs.styles";

export const Route = createFileRoute("/docs/primitives")({
	component: PrimitivesDoc,
});

function PrimitivesDoc() {
	return (
		<DocsLayout>
			<div {...stylex.props(docStyles.page)}>
				<Text variant="h1">Primitives with Base UI</Text>

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">Why Base UI?</Text>
						<Text variant="body2" color="secondary">
							Blenx UI is built on <strong>Base UI React</strong> (
							<code {...stylex.props(docStyles.code)}>@base-ui/react</code>), a
							headless component library from the creators of Material UI. Base
							UI provides unstyled, accessible primitives that handle behavior,
							keyboard navigation, focus management, and ARIA attributes.
						</Text>
						<Text variant="body2" color="secondary">
							Each Blenx UI component wraps a Base UI primitive with Stylex
							styling. This separation keeps the behavioral logic
							framework-agnostic while allowing full control over visual
							presentation.
						</Text>
					</VStack>
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">Component Architecture</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<code>{`// Base UI handles behavior and accessibility
import { useRender } from "@base-ui/react/use-render";

// Stylex handles visual styling
import * as stylex from "@stylexjs/stylex";

export function Button({ render, ...props }) {
  return useRender({
    defaultTagName: "button",
    props: stylex.props(buttonStyles.base, props),
    render,
  });
}`}</code>
						</Surface>
					</VStack>
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">Key Primitives Used</Text>
						<div {...stylex.props(docStyles.cardGrid)}>
							<div {...stylex.props(docStyles.card)}>
								<p {...stylex.props(docStyles.cardTitle)}>Dialog</p>
								<p {...stylex.props(docStyles.cardSubtitle)}>
									@base-ui/react/dialog
								</p>
							</div>
							<div {...stylex.props(docStyles.card)}>
								<p {...stylex.props(docStyles.cardTitle)}>Popover</p>
								<p {...stylex.props(docStyles.cardSubtitle)}>
									@base-ui/react/popover
								</p>
							</div>
							<div {...stylex.props(docStyles.card)}>
								<p {...stylex.props(docStyles.cardTitle)}>
									Select, Menu, Combobox, Autocomplete
								</p>
								<p {...stylex.props(docStyles.cardSubtitle)}>
									various Base UI modules
								</p>
							</div>
							<div {...stylex.props(docStyles.card)}>
								<p {...stylex.props(docStyles.cardTitle)}>
									Field, Input, Switch, Toggle
								</p>
								<p {...stylex.props(docStyles.cardSubtitle)}>form primitives</p>
							</div>
							<div {...stylex.props(docStyles.card)}>
								<p {...stylex.props(docStyles.cardTitle)}>
									ScrollArea, Tabs, Separator, Avatar
								</p>
								<p {...stylex.props(docStyles.cardSubtitle)}>
									layout and media
								</p>
							</div>
							<div {...stylex.props(docStyles.card)}>
								<p {...stylex.props(docStyles.cardTitle)}>
									useRender, mergeProps
								</p>
								<p {...stylex.props(docStyles.cardSubtitle)}>
									composition utilities
								</p>
							</div>
						</div>
					</VStack>
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">
							Extending with{" "}
							<code {...stylex.props(docStyles.code)}>render</code>
						</Text>
						<Text variant="body2" color="secondary">
							Every component supports a{" "}
							<code {...stylex.props(docStyles.code)}>render</code> prop that
							lets you override the rendered HTML element. This makes the
							library highly composable:
						</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<code>{`// Render Button as a link
<Button render={<a href="/page" />}>Go</Button>

// Compose Dialog close as a Button
<DialogPrimitive.Close render={<Button size="small" />}>
  <XIcon />
</DialogPrimitive.Close>`}</code>
						</Surface>
					</VStack>
				</div>
			</div>
		</DocsLayout>
	);
}
