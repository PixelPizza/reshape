import { r } from "../../src";
import { s } from "@sapphire/shapeshift";
import { test } from "vitest";

describe("ArrayReshaper tests", () => {
	describe("string", () => {
		test("GIVEN valid array THEN returns stringified array", () => {
			const validator = r.array(s.array(s.string)).string;
			const result = validator.parse(["a", "b", "c"]);
			expect(result).toEqual('["a","b","c"]');
		});

		test("GIVEN valid number array THEN returns stringified array", () => {
			const validator = r.array(s.array(s.number)).string;
			const result = validator.parse([1, 2, 3]);
			expect(result).toEqual("[1,2,3]");
		});

		test("GIVEN valid boolean array THEN returns stringified array", () => {
			const validator = r.array(s.array(s.boolean)).string;
			const result = validator.parse([true, false, true]);
			expect(result).toEqual("[true,false,true]");
		});
	});

	describe("boolean", () => {
		test("GIVEN valid array THEN returns true", () => {
			const validator = r.array(s.array(s.number)).boolean;
			const result = validator.parse([1, 2, 3]);
			expect(result).toEqual(true);
		});

		test("GIVEN valid string array THEN returns true", () => {
			const validator = r.array(s.array(s.string)).boolean;
			const result = validator.parse(["a", "b", "c"]);
			expect(result).toEqual(true);
		});
	});

	describe("number", () => {
		test("GIVEN valid array THEN returns number", () => {
			const validator = r.array(s.array(s.string)).number;
			const result = validator.parse(["1"]);
			expect(result).toEqual(1);
		});

		test("GIVEN invalid array THEN throws error", () => {
			const validator = r.array(s.array(s.string)).number;
			expect(() => validator.parse(["a"])).toThrow();
		});
	});
});
