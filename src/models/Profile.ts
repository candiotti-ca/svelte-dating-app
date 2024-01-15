import type { Age } from "./Age";
import type { Color } from "./Color";
import type { Pattern } from "./Pattern";

export interface Profile {
    firstname: string;
    lastname: string;
    age: Age;
    abstract: string;
    city: string;
    size: number;
    colors: Color[];
    pattern: Pattern;
}