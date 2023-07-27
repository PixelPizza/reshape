import { ReshapeError } from "../../../src";
import { inspect } from "util";

describe("ReshapeError tests", () => {
	describe("toJSON", () => {
		test("GIVEN ReshapeError THEN returns object with name, reshaper and given", () => {
			const error = new ReshapeError("r.string.integer", "test", "false");
			expect(error.toJSON()).toEqual({
				name: "ReshapeError",
				reshaper: "r.string.integer",
				given: "false"
			});
		});
	});

	describe("customInspectSymbolStackLess", () => {
		test("GIVEN ReshapeError THEN returns string with name, reshaper, message and given", () => {
			const error = new ReshapeError("r.string.integer", "test", "false");
			expect(inspect(error)).toEqual(
				`ReshapeError > r.string.integer\n  test\n\n  Received:\n  | 'false'\n${error.stack!.slice(
					error.stack!.indexOf("\n")
				)}`
			);
		});

		test("GIVEN ReshapeError with depth -1 THEN returns string with reshaper and stack", () => {
			const error = new ReshapeError("r.string.integer", "test", "false");
			expect(inspect(error, { depth: -1 })).toEqual(
				`[ReshapeError: r.string.integer]\n${error.stack!.slice(
					error.stack!.indexOf("\n")
				)}`
			);
		});
	});
});
