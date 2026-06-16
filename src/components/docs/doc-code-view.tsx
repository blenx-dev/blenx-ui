import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { spacing } from "@/lib/theme/tokens.stylex";
import { Button, HStack, SegmentedControl, Surface } from "../ui";

const styles = stylex.create({
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: "var(--space-4)",
		paddingRight: "var(--space-3)",
		paddingTop: "var(--space-2)",
		paddingBottom: "var(--space-2)",
		backgroundColor: "#161b22",
		borderBottom: "1px solid #30363d",
	},
	headerLeft: {
		display: "flex",
		alignItems: "center",
		gap: "var(--space-3)",
		minWidth: 0,
	},
	title: {
		fontFamily: "var(--font-display)",
		fontSize: "13px",
		color: "#8b949e",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		lineHeight: 1.4,
		fontWeight: 500,
	},
	languageBadge: {
		fontFamily: "var(--font-mono)",
		fontSize: "11px",
		padding: "2px 8px",
		borderRadius: "var(--border-radius-full)",
		backgroundColor: "#21262d",
		color: "#c9d1d9",
		textTransform: "uppercase",
		letterSpacing: "0.5px",
		fontWeight: 600,
		lineHeight: "18px",
		flexShrink: 0,
		border: "1px solid #30363d",
	},
	scrollWrapper: {
		overflowX: "auto",
		overflowY: "auto",
		padding: spacing.medium,
		maxHeight: "80svh",
		lineHeight: 1.2,
	},
});

interface CodeFile {
	code: string;
	title?: string;
	language?: string;
}

interface DocCodeViewProps {
	code?: string;
	title?: string;
	language?: string;
	files?: CodeFile[];
}

function escapeHtml(code: string): string {
	return `<pre class="shiki"><code>${code
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")}</code></pre>`;
}

function DocCodeView({ code, title, language, files }: DocCodeViewProps) {
	const activeFiles =
		files || (code != null ? [{ code, title, language }] : []);
	const [activeIndex, setActiveIndex] = useState(0);
	const activeFile = activeFiles[activeIndex] || {
		code: "",
		title: "",
		language: "typescript",
	};

	const [copied, setCopied] = useState(false);
	const [highlighted, setHighlighted] = useState<string | null>(null);
	const mountedRef = useRef(true);

	useEffect(() => {
		mountedRef.current = true;
		const lang = activeFile.language ?? "typescript";

		highlightCode(activeFile.code, lang).then((html) => {
			if (mountedRef.current) {
				setHighlighted(html);
			}
		});

		return () => {
			mountedRef.current = false;
		};
	}, [activeFile.code, activeFile.language]);

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(activeFile.code).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}, [activeFile.code]);

	const lang = activeFile.language ?? "typescript";
	const isMultiFile = activeFiles.length > 1;

	return (
		<Surface variant="sunken">
			{isMultiFile ? (
				<Surface variant="raised" radius="none">
					<HStack justify="between" padding="xxsmall">
						<SegmentedControl
							variant="default"
							value={activeIndex.toString()}
							radius="xsmall"
							onValueChange={(value) => {
								setActiveIndex(Number(value));
								setHighlighted(null);
							}}
							options={activeFiles.map((file, idx) => ({
								value: `${idx}`,
								label: file.title || `File ${idx + 1}`,
							}))}
						/>
						<Button
							type="button"
							size="xsmall"
							radius="xsmall"
							onClick={handleCopy}
							aria-label={copied ? "Copied" : "Copy code"}
						>
							{copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
							{copied ? "Copied" : "Copy"}
						</Button>
					</HStack>
				</Surface>
			) : (
				<div {...stylex.props(styles.header)}>
					<div {...stylex.props(styles.headerLeft)}>
						{activeFile.title && (
							<span {...stylex.props(styles.title)}>{activeFile.title}</span>
						)}
						<span {...stylex.props(styles.languageBadge)}>{lang}</span>
					</div>
					<Button
						type="button"
						onClick={handleCopy}
						size="xsmall"
						aria-label={copied ? "Copied" : "Copy code"}
					>
						{copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
						{copied ? "Copied" : "Copy"}
					</Button>
				</div>
			)}

			<div {...stylex.props(styles.scrollWrapper)}>
				<div
					// biome-ignore lint/security/noDangerouslySetInnerHtml: dangerouslySetInnerHTML
					dangerouslySetInnerHTML={{
						__html: highlighted ?? escapeHtml(activeFile.code),
					}}
				/>
			</div>
		</Surface>
	);
}

export { DocCodeView };
