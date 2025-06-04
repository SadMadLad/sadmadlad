import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
	static targets = ["link"];

	linkTargetConnected(link) {
		link.classList.add("text-primary-500", "underline");
	}
}
