import { Controller } from "@hotwired/stimulus";
import hljs from "highlight.js";

const clipboardIcon = `
<svg class="w-10 h-10 stroke-white fill-gray-100" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>
`;

export default class extends Controller {
	static targets = ["notificationText"];
	static values = {
		language: { type: String, default: "plaintext" },
		code: { type: String, default: "" },
	};

	connect() {
		const code = document.createElement("code");
		const highlightedCode = hljs.highlight(this.codeValue.trim(), {
			language: this.languageValue,
		}).value;

		code.innerHTML = highlightedCode;
		code.classList.add("hljs");
		code.classList.add(`language-${this.languageValue}`);

		this.element.appendChild(code);
		this.element.classList.add("relative");

		this.#addClipboardButton();
	}

	copy() {
		navigator.clipboard.writeText(this.codeValue.trim());

		this.notificationTextTarget.classList.remove("hidden");

		setTimeout(() => {
			this.notificationTextTarget.classList.add("hidden");
		}, 2000);
	}

	#addClipboardButton() {
		const div = document.createElement("div");
		const button = document.createElement("button");
		const buttonClasses =
			"p-1 border border-gray-500 bg-gray-800 text-white rounded w-6 h-6 inline-flex items-center justify-center hover:bg-green-800";

		div.classList.add(
			"absolute",
			"top-4",
			"right-4",
			"flex",
			"flex-col",
			"items-center",
			"gap-0.5",
		);

		button.dataset.action = "click->code-highlight#copy";
		button.classList.add(...buttonClasses.split(" "));
		button.innerHTML = clipboardIcon;

		div.appendChild(button);

		this.element.appendChild(div);

		const span = document.createElement("span");
		span.classList.add("text-white", "text-[0.55rem]", "text-center", "hidden");
		span.dataset.codeHighlightTarget = "notificationText";
		span.textContent = "Copied";

		div.appendChild(span);
	}
}
