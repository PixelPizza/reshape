import { r } from "../../src";
import { s } from "@sapphire/shapeshift";
import { test } from "vitest";

describe("StringReshaper tests", () => {
	describe("array", () => {
		test("GIVEN valid array string THEN returns array", () => {
			const validator = r.string(s.string).array();
			const result = validator.parse('["a", "b", "c"]');
			expect(result).toEqual(["a", "b", "c"]);
		});

		test("GIVEN invalid array string THEN throws error", () => {
			const validator = r.string(s.string).array();
			const resultFunc = () => validator.parse("invalid");
			expect(resultFunc).toThrowError();
		});

		test("GIVEN valid typed array string THEN returns array", () => {
			const validator = r.string(s.string).array(s.number);
			const result = validator.parse("[1, 2, 3]");
			expect(result).toEqual([1, 2, 3]);
		});

		test("GIVEN invalid typed array string THEN throws error", () => {
			const validator = r.string(s.string).array(s.number);
			const resultFunc = () => validator.parse("[1, true]");
			expect(resultFunc).toThrowError();
		});
	});

	describe("bigint", () => {
		test("GIVEN valid bigint string THEN returns bigint", () => {
			const validator = r.string(s.string).bigint;
			const result = validator.parse("1");
			expect(result).toEqual(BigInt(1));
		});

		test("GIVEN invalid bigint string THEN throws error", () => {
			const validator = r.string(s.string).bigint;
			const resultFunc = () => validator.parse("invalid");
			expect(resultFunc).toThrowError();
		});
	});

	describe("boolean", () => {
		test("GIVEN valid boolean string THEN returns boolean", () => {
			const validator = r.string(s.string).boolean;
			const result = validator.parse("true");
			expect(result).toEqual(true);
		});

		test("GIVEN invalid boolean string THEN throws error", () => {
			const validator = r.string(s.string).boolean;
			const resultFunc = () => validator.parse("invalid");
			expect(resultFunc).toThrowError();
		});
	});

	describe("integer", () => {
		test("GIVEN valid integer string THEN returns integer", () => {
			const validator = r.string(s.string).integer;
			const result = validator.parse("1");
			expect(result).toEqual(1);
		});

		test("GIVEN invalid integer string THEN throws error", () => {
			const validator = r.string(s.string).integer;
			const resultFunc = () => validator.parse("invalid");
			expect(resultFunc).toThrowError();
		});

		test("GIVEN float string THEN throws error", () => {
			const validator = r.string(s.string).integer;
			const resultFunc = () => validator.parse("1.5");
			expect(resultFunc).toThrowError();
		});
	});

	describe("number", () => {
		test("GIVEN valid number string THEN returns number", () => {
			const validator = r.string(s.string).number;
			const result = validator.parse("1");
			expect(result).toEqual(1);
		});

		test("GIVEN invalid number string THEN throws error", () => {
			const validator = r.string(s.string).number;
			const resultFunc = () => validator.parse("invalid");
			expect(resultFunc).toThrowError();
		});

		test("GIVEN float string THEN returns number", () => {
			const validator = r.string(s.string).number;
			const result = validator.parse("1.5");
			expect(result).toEqual(1.5);
		});
	});

	describe("object", () => {
		test("GIVEN valid object string THEN returns object", () => {
			const validator = r.string(s.string).object({ a: s.number });
			const result = validator.parse('{"a": 1}');
			expect(result).toEqual({ a: 1 });
		});

		test("GIVEN valid object with multiple keys THEN returns object", () => {
			const validator = r
				.string(s.string)
				.object({ a: s.number, b: s.string });
			const result = validator.parse('{"a": 1, "b": "2"}');
			expect(result).toEqual({ a: 1, b: "2" });
		});

		test("GIVEN invalid object string THEN throws error", () => {
			const validator = r.string(s.string).object({ a: s.number });
			const resultFunc = () => validator.parse("invalid");
			expect(resultFunc).toThrowError();
		});

		test("GIVEN invalid object with multiple keys THEN throws error", () => {
			const validator = r
				.string(s.string)
				.object({ a: s.number, b: s.string });
			const resultFunc = () => validator.parse('{"a": 1, "b": true}');
			expect(resultFunc).toThrowError();
		});
	});

	describe("record", () => {
		test("GIVEN valid record string THEN returns record", () => {
			const validator = r.string(s.string).record();
			const result = validator.parse('{"a": 1, "b": true}');
			expect(result).toEqual({ a: 1, b: true });
		});

		test("GIVEN invalid record string THEN throws error", () => {
			const validator = r.string(s.string).record();
			const resultFunc = () => validator.parse("invalid");
			expect(resultFunc).toThrowError();
		});

		test("GIVEN valid typed record string THEN returns record", () => {
			const validator = r.string(s.string).record(s.number);
			const result = validator.parse('{"a": 1, "b": 2}');
			expect(result).toEqual({ a: 1, b: 2 });
		});

		test("GIVEN invalid typed record string THEN throws error", () => {
			const validator = r.string(s.string).record(s.number);
			const resultFunc = () => validator.parse('{"a": 1, "b": true}');
			expect(resultFunc).toThrowError();
		});
	});
});
