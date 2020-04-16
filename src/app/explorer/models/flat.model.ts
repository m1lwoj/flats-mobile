export class Flat {
    constructor(public price: number,
                public meterage: number,
                public pricepermeter: number,
                public url: string,
                public dateAdded: Date) {
    }
}

export class FlatList {
    constructor(public items: Flat[],
                public totalResults: string) {
    }
}
