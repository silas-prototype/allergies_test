/*
- eggs (1)
- peanuts (2)
- shellfish (4)
- strawberries (8)
- tomatoes (16)
- chocolate (32)
- pollen (64)
- cats (128)
 */
const eggs = 1;
const peanuts = 2;
const shellfish = 4;
const strawberries = 8;
const tomatoes = 16;
const chocolate = 32;
const pollen = 64;
const cats = 128;
const allAllergies = [
    "eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"
]
type Allergenes = {
    [key in string]: number | undefined
}
const allergenes = {
    eggs: eggs,
    peanuts: peanuts,
    shellfish: shellfish,
    strawberries: strawberries,
    tomatoes: tomatoes,
    chocolate: chocolate,
    pollen: pollen,
    cats: cats,
} as Allergenes;
export default class Allergies {
    input: number;
    constructor(input: number) {
        this.input = input ?? 0;
        return this;
    }

    allergicTo(allergene: string): boolean {
        const numericValue = allergenes[allergene];
        if (!numericValue || numericValue < 0) return false;
        return (this.input & numericValue) > 0;
    }
    list(): string[] {
        const list = allAllergies.filter(this.allergicTo)
        return list
    }
}