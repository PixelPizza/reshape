import { BaseValidator } from "@sapphire/shapeshift";

export interface IToBigintReshaper {
	get bigint(): BaseValidator<bigint>;
}
