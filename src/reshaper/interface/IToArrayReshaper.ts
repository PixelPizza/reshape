import { BaseValidator } from "@sapphire/shapeshift";

export interface IToArrayReshaper {
	array<T>(validator?: BaseValidator<T>): BaseValidator<T[]>;
}
