import { lazy, Suspense, useState } from "react";
import { demoImports } from "@/docs-demo-registry";
import { Text } from "../ui/Text/text";

export interface DemoItem {
	name: string;
	component: React.ComponentType;
}

interface DocDemoRendererProps {
	registryName: string;
}

function DemosSwitch({ demos }: { demos: DemoItem[] }) {
	const [idx, setIdx] = useState(0);
	const Demo = idx < demos.length ? demos[idx].component : null;

	if (demos.length <= 1) {
		return Demo ? <Demo /> : <Text>Demo not found</Text>;
	}

	return (
		<>
			<div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
				{demos.map((demo, i) => (
					<button
						key={demo.name}
						type="button"
						onClick={() => setIdx(i)}
						style={{
							padding: "6px 12px",
							border: i === idx ? "2px solid" : "1px solid",
							borderRadius: 6,
							background: "transparent",
							cursor: "pointer",
							fontSize: 13,
							fontWeight: i === idx ? 600 : 400,
						}}
					>
						{demo.name}
					</button>
				))}
			</div>
			{Demo ? <Demo /> : <Text>Demo not found</Text>}
		</>
	);
}

function DocDemoRenderer({ registryName }: DocDemoRendererProps) {
	const importFn = demoImports[registryName];

	if (!importFn) {
		return null;
	}

	const DemoComponent = lazy(async (): Promise<{ default: React.ComponentType }> => {
		const mod = await importFn();
		const m = mod as Record<string, unknown>;
		const demos = m.demos as DemoItem[] | undefined;

		if (demos && demos.length > 0) {
			return {
				default: () => <DemosSwitch demos={demos} />,
			};
		}

		return {
			default: () => <Text>Demo not found</Text>,
		};
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

export { DocDemoRenderer };