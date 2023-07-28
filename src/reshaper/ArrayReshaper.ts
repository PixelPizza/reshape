import { Reshaper } from "./Reshaper";
import type { IToStringReshaper } from "./interface/IToStringReshaper";
import type { ArrayValidator, BaseValidator } from "@sapphire/shapeshift";
import { Result } from "@sapphire/shapeshift";
import type { IToBooleanReshaper } from "./interface/IToBooleanReshaper";
import type { IToNumberReshaper } from "./interface/IToNumberReshaper";

export class ArrayReshaper<T>
	extends Reshaper<T[]>
	implements IToStringReshaper, IToBooleanReshaper, IToNumberReshaper
{
	public constructor(validator: ArrayValidator<T[]>) {
		super(validator);
	}

	public get string(): BaseValidator<string> {
		return this.validator.reshape((value) => {
			return Result.ok(JSON.stringify(value));
		});
	}

	public get boolean(): BaseValidator<boolean> {
		return this.validator.reshape((value) => {
			return Result.ok(Boolean(value));
		});
	}

	public get number(): BaseValidator<number> {
		return this.validator.reshape((value) => {
			const number = Number(value);
			if (isNaN(number))
				return this.createErrorResult(
					"r.array(T).number",
					"Unable to reshape to a number",
					value
				);
			return Result.ok(number);
		});
	}
}
