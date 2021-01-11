export class Pageable {

    constructor(
        public page: number,
        public size: number
    ) { }

    sortField: string;
    sortOrder: string;
}

