import { BaseValidator } from "@sapphire/shapeshift";

export interface IToIntegerReshaper {
	get integer(): BaseValidator<number>;
}
