export interface Age {
    value: number;
    description: string;
}

export const AGES: Age[] = [
    { value: 0, description: "Brand new!" },
    { value: 1, description: "Barely worn" },
    { value: 2, description: "Regular use" },
    { value: 3, description: "Used by life" },
    { value: 4, description: "Holed all over" }
];