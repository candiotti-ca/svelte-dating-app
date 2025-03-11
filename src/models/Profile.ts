
export type ProfileParams = {
    id: string;
    firstname: string;
    lastname: string;
    abstract?: string;
    city: string;
    size: number;
    bandColor: number;
    bodyColor: number;
    age: number;
    pattern: string;
    favoriteProfiles: string[];
};

export class Profile {
    id: string;
    firstname: string;
    lastname: string;
    age: number;
    abstract?: string;
    city: string;
    size: number;
    bandColor: number;
    bodyColor: number;
    pattern: string;
    favoriteProfiles: string[];

    constructor({ id, firstname, lastname, abstract, age, city, size, bandColor, bodyColor, pattern, favoriteProfiles }: ProfileParams) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.abstract = abstract;
        this.age = age;
        this.city = city;
        this.size = size;
        this.bandColor = bandColor;
        this.bodyColor = bodyColor;
        this.pattern = pattern;
        this.favoriteProfiles = favoriteProfiles;
    }

    public similarityRate(that: Profile): number {
        let similarity = 0;
        const total = 5;

        if (this.age == that.age) {
            similarity++;
        }

        if (this.size == that.size) {
            similarity++;
        }

        if (this.pattern == that.pattern) {
            similarity++;
        }

        if (this.bandColor == that.bandColor) {
            similarity++;
        }

        if (this.bodyColor == that.bodyColor) {
            similarity++;
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