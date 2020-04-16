export class Filter {
    constructor(public priceFrom: number,
                public priceTo: number,
                public meterageFrom: number,
                public meterageTo: number,
                public region: string,
                public LatLons: LatLon[]) {
    }
}

export class LatLon {
    constructor(public LonFrom: string,
                public LonTo: string,
                public LatFrom: string,
                public LatTo: string) {
    }
}
