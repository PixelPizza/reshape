import type { BaseValidator } from "@sapphire/shapeshift";

export interface IToBooleanReshaper {
	get boolean(): BaseValidator<boolean>;
}
