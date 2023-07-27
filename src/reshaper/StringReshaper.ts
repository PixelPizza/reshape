import { Reshaper } from "./Reshaper";
import type { BaseValidator } from "@sapphire/shapeshift";
import { BaseError, Result, s, StringValidator } from "@sapphire/shapeshift";
import type { IToBooleanReshaper } from "./interface/IToBooleanReshaper";
import type { IToArrayReshaper } from "./interface/IToArrayReshaper";
import type { IToNumberReshaper } from "./interface/IToNumberReshaper";
import type { IToBigintReshaper } from "./interface/IToBigintReshaper";
import type { IToIntegerReshaper } from "./interface/IToIntegerReshaper";
import type { IToObjectReshaper } from "./interface/IToObjectReshaper";
import type { IToRecordReshaper } from "./interface/IToRecordReshaper";

export class StringReshaper
	extends Reshaper<string>
	implements
		IToBooleanReshaper,
		IToArrayReshaper,
		IToNumberReshaper,
		IToBigintReshaper,
		IToIntegerReshaper,
		IToObjectReshaper,
		IToRecordReshaper
{
	public constructor(validator: StringValidator<string>) {
		super(validator);
	}

	public array<T>(validator: BaseValidator<T> = s.any): BaseValidator<T[]> {
		return this.validator.reshape((value) => {
			try {
				const array = JSON.parse(value);
				validator.array.parse(array);
				return Result.ok(array);
			} catch (error) {
				if (error instanceof BaseError) return Result.err(error);
				return this.createErrorResult(
					"r.string.array(T)",
					"Expected an array",
					value
				);
			}
		});
	}

	public get bigint(): BaseValidator<bigint> {
		return this.validator.reshape((value) => {
			try {
				return Result.ok(BigInt(value));
			} catch {
				return this.createErrorResult(
					"r.string.bigint",
					"Expected a bigint",
					value
				);
			}
		});
	}

	public get boolean(): BaseValidator<boolean> {
		return this.validator.reshape((value) => {
			if (!["true", "false"].includes(value))
				return this.createErrorResult(
					"r.string.boolean",
					"Expected a boolean",
					value
				);
			return Result.ok(value === "true");
		});
	}

	public get integer(): BaseValidator<number> {
		return this.validator.reshape((value) => {
			const number = Number(value);
			if (number % 1 !== 0)
				return this.createErrorResult(
					"r.string.integer",
					"Expected an integer",
					value
				);
			return Result.ok(number);
		});
	}

	public get number(): BaseValidator<number> {
		return this.validator.reshape((value) => {
			const number = Number(value);
			if (isNaN(number))
				return this.createErrorResult(
					"r.string.number",
					"Expected a number",
					value
				);
			return Result.ok(number);
		});
	}

	public object<T extends object>(shape: T): BaseValidator<T> {
		return this.validator.reshape((value) => {
			try {
				const object = JSON.parse(value);
				s.object(shape).parse(object);
				return Result.ok(object);
			} catch (error) {
				if (error instanceof BaseError) return Result.err(error);
				return this.createErrorResult(
					"r.string.object(T)",
					"Expected an object",
					value
				);
			}
		});
	}

	public record<T>(
		validator: BaseValidator<T> = s.any
	): BaseValidator<Record<string, T>> {
		return this.validator.reshape((value) => {
			try {
				const object = JSON.parse(value);
				s.record(validator).parse(object);
				return Result.ok(object);
			} catch (error) {
				if (error instanceof BaseError) return Result.err(error);
				return this.createErrorResult(
					"r.string.record(T)",
					"Expected a record",
					value
				);
			}
		});
	}
}
