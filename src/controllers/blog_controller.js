import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
	static targets = ["link", "heading"];
	static values = {
		headingClass: { type: Array, default: ["font-bold", "text-2xl", "mt-8"] },
		linkClass: { type: Array, default: ["text-primary-500", "underline"] },
	};

	headingTargetConnected(heading) {
		if (heading.classList.length > 0) return;

		heading.classList.add(...this.headingClassValue);
	}

	linkTargetConnected(link) {
		if (link.classList.length > 0) return;

		link.classList.add(...this.linkClassValue);
	}
}
