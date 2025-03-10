import type { Color } from "./Color";

export class Profile {
    id: string;
    firstname: string;
    lastname: string;
    age: number;
    abstract?: string;
    city: string;
    size: number;
    colors: Color[];
    pattern: string;
    favoriteProfiles: string[];

    constructor(id: string, firstname: string = '', lastname: string = '', abstract: string = '', city: string = '', size: number = 37, colors: Color[] = [], age: number = 0, pattern: string = '', favoriteProfiles: string[], bgColor: Color) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.abstract = abstract;
        this.age = age;
        this.city = city;
        this.size = size;
        this.colors = colors;
        this.pattern = pattern;
        this.favoriteProfiles = favoriteProfiles;
    }

    public similarityRate(that: Profile): number {
        let similarity = 0;
        const total = this.colors.length + 3;

        if (this.age == that.age) {
            similarity++;
        }

        if (this.size == that.size) {
            similarity++;
        }

        if (this.pattern == that.pattern) {
            similarity++;
        }

        if (this.colors.length > 0) {
            this.colors
                .filter(color => that.colors.includes(color))
                .forEach(() => similarity++);
        }

        return similarity / total;
    }

    public formattedSimilarityRate(that: Profile): string {
        const rate = this.similarityRate(that);
        const rounded = Math.round(rate * 100);
        return rounded + '%';
    }

    public isHoled(): boolean {
        return this.age == 3;
    }

    public getAge(): string {
        if (this.age == 0) {
            return 'new';
        }

        if (this.age == 1) {
            return 'used';
        }

        if (this.age == 2) {
            return 'aged';
        }

        return 'holed';
    }
}