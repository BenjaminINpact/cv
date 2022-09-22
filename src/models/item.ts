class Item {
    id: string = new Date().toISOString();
    text: string;
    isPermanent: boolean;
    category: string;
    constructor(text: string, isPermanent: boolean, category: string) {
        this.text = text;
        this.isPermanent = isPermanent;
        this.category = category;
    }
}
export default Item;