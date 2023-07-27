import type { BaseValidator } from "@sapphire/shapeshift";
import { Result } from "@sapphire/shapeshift";
import { ReshapeError } from "../lib/error/ReshapeError";

export abstract class Reshaper<T> {
	protected constructor(protected readonly validator: BaseValidator<T>) {}

	protected createErrorResult(reshaper: string, message: string, value: T) {
		return Result.err(new ReshapeError(reshaper, message, value));
	}
}
