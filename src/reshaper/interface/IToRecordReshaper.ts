import { BaseValidator } from "@sapphire/shapeshift";

export interface IToRecordReshaper {
	record<T>(validator?: BaseValidator<T>): BaseValidator<Record<string, T>>;
}
