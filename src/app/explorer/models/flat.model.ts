export class Flat {
    constructor(public id: string,
                public price: number,
                public meterage: number,
                public pricepermeter: number,
                public url: string,
                public dateAdded: Date,
                public name: string) {
    }

    static create(){
        return new Flat('', 0, 0, 0, '', new Date(), '');
    }
}

export class FlatList {
    constructor(public items: Flat[],
                public totalResults: string) {
    }
}
