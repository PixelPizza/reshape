import { BaseError, customInspectSymbolStackLess } from "@sapphire/shapeshift";
import { inspect, type InspectOptionsStylized } from "util";

export class ReshapeError extends BaseError {
	public constructor(
		public readonly reshaper: string,
		message: string,
		public readonly given: unknown
	) {
		super(message);
		this.name = "ReshapeError";
	}

	public toJSON() {
		return {
			name: this.name,
			reshaper: this.reshaper,
			given: this.given
		};
	}

	protected [customInspectSymbolStackLess](
		depth: number,
		options: InspectOptionsStylized
	): string {
		const reshaper = options.stylize(this.reshaper, "string");
		if (depth < 0) {
			return options.stylize(`[ReshapeError: ${reshaper}]`, "special");
		}

		const newOptions = {
			...options,
			depth: options.depth === null ? null : options.depth! - 1,
			compact: true
		};

		const padding = `\n  ${options.stylize("|", "undefined")} `;
		const given = inspect(this.given, newOptions).replace(/\n/g, padding);

		const header = `${options.stylize(
			"ReshapeError",
			"special"
		)} > ${reshaper}`;
		const message = options.stylize(this.message, "regexp");
		const givenBlock = `\n  ${options.stylize(
			"Received:",
			"regexp"
		)}${padding}${given}`;
		return `${header}\n  ${message}\n${givenBlock}`;
	}
}
