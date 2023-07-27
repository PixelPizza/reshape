import { BaseValidator } from "@sapphire/shapeshift";

export interface IToStringReshaper {
	get string(): BaseValidator<string>;
}
