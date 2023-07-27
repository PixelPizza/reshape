import { StringReshaper } from "../reshaper/StringReshaper";
import type { StringValidator } from "@sapphire/shapeshift";

export class Reshapers {
	public string(validator: StringValidator<string>) {
		return new StringReshaper(validator);
	}
}
