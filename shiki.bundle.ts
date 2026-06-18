/* Generate by @shikijs/codegen */
import type {
	DynamicImportLanguageRegistration,
	DynamicImportThemeRegistration,
	HighlighterGeneric,
} from "@shikijs/types";
import {
	createBundledHighlighter,
	createSingletonShorthands,
} from "@shikijs/core";
import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";

type BundledLanguage =
	| "typescript"
	| "ts"
	| "cts"
	| "mts"
	| "javascript"
	| "js"
	| "cjs"
	| "mjs";
type BundledTheme = "github-dark";
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>;

const bundledLanguages = {
	typescript: () => import("@shikijs/langs/typescript"),
	ts: () => import("@shikijs/langs/typescript"),
	cts: () => import("@shikijs/langs/typescript"),
	mts: () => import("@shikijs/langs/typescript"),
	javascript: () => import("@shikijs/langs/javascript"),
	js: () => import("@shikijs/langs/javascript"),
	cjs: () => import("@shikijs/langs/javascript"),
	mjs: () => import("@shikijs/langs/javascript"),
} as Record<BundledLanguage, DynamicImportLanguageRegistration>;

const bundledThemes = {
	"github-dark": () => import("@shikijs/themes/github-dark"),
} as Record<BundledTheme, DynamicImportThemeRegistration>;

const createHighlighter = /* @__PURE__ */ createBundledHighlighter<
	BundledLanguage,
	BundledTheme
>({
	langs: bundledLanguages,
	themes: bundledThemes,
	engine: () => createJavaScriptRegexEngine(),
});

const {
	codeToHtml,
	codeToHast,
	codeToTokensBase,
	codeToTokens,
	codeToTokensWithThemes,
	getSingletonHighlighter,
	getLastGrammarState,
} = /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(
	createHighlighter,
);

export {
	bundledLanguages,
	bundledThemes,
	codeToHast,
	codeToHtml,
	codeToTokens,
	codeToTokensBase,
	codeToTokensWithThemes,
	createHighlighter,
	getLastGrammarState,
	getSingletonHighlighter,
};
export type { BundledLanguage, BundledTheme, Highlighter };
