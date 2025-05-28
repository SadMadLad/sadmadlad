import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

export function markedParse(markdownString) {
	const marked = new Marked();

	return marked.parse(markdownString);
}

export function markedParseWithCode(markdownString) {
	const marked = new Marked(
		markedHighlight({
			emptyLangClass: "hljs",
			langPrefix: "hljs language-",
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : "plaintext";
				return hljs.highlight(code, { language }).value;
			},
		}),
	);

	return marked.parse(markdownString);
}
