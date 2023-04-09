export class IngredientType {
    _id?: string;
    name: string;
    image: string;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }
}
