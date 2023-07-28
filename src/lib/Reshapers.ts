import { StringReshaper } from "../reshaper/StringReshaper";
import type { ArrayValidator, StringValidator } from "@sapphire/shapeshift";
import { ArrayReshaper } from "../reshaper/ArrayReshaper";

export class Reshapers {
	public string(validator: StringValidator<string>) {
		return new StringReshaper(validator);
	}

	public array(validator: ArrayValidator<any[]>) {
		return new ArrayReshaper(validator);
	}
}
