import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
	static targets = ["link", "heading", "c"];
	static values = {
		headingClass: { type: Array, default: ["font-black", "mt-5", "mb-2"] },
		linkClass: { type: Array, default: ["text-primary-500", "underline"] },
    cClass: { type: Array, default: ["bg-gray-100", "px-1", "py-0.5"] },
	};

  cTargetConnected(c) {
    if (c.classList.length > 0) return;

  c.classList.add(...this.cClassValue);
  }

	headingTargetConnected(heading) {
		if (heading.classList.length > 0) return;

		heading.classList.add(...this.headingClassValue, this.#headingLevel(heading));
	}

	linkTargetConnected(link) {
		if (link.classList.length > 0) return;

		link.classList.add(...this.linkClassValue);
	}

  #headingLevel(heading) {
    const headingHash = {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl"
    }

    return headingHash[heading.dataset.level] || "text-2xl";
  }
}
