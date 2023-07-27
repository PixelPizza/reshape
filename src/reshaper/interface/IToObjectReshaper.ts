import { BaseValidator } from "@sapphire/shapeshift";

export interface IToObjectReshaper {
	object<T extends object>(shape: T): BaseValidator<T>;
}
