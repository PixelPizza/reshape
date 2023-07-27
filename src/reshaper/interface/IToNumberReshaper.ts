import { BaseValidator } from "@sapphire/shapeshift";

export interface IToNumberReshaper {
	get number(): BaseValidator<number>;
}
