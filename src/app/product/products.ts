export interface Heading {
    image: string,
    title: string,
    description: string
}

export interface Product {
    id: string,
    title: string,
    price: number,
    description: string,
    coverImage: string,
    headings: Heading[],
}

export const products = [
    {
        id: "ac585b44-af7f-0aa6-d28f-a0914dbe2b10",
        title: 'product001',
        price: 1000,
        description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
        coverImage: './assets/img/phone-cover.jpg',
        headings: [
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading001',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading002',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading003',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
        ]
    },
    {
        id: "b0eb76b4-3918-1e94-f7ee-36f0ffaa578a",
        title: 'product002',
        price: 1500,
        coverImage: './assets/img/phone-cover.jpg',
        description: "product 002 some quick example text to build on the card title and make up the bulk of the card's content",
        headings: [
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading001',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading002',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading003',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
        ]
    },
    {
        id: "d950f628-cd1c-41fb-a504-db5031ede579",
        title: 'product003',
        coverImage: './assets/img/phone-cover.jpg',
        price: 1300,
        description: "product 003 quick example text to build on the card title and make up the bulk of the card's content",
        headings: [
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading001',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading002',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading003',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
        ]
    },
    {
        id: "68e5c3c4-5602-f61f-2595-4fe4f6bc850e",
        title: 'product004',
        coverImage: './assets/img/phone-cover.jpg',
        price: 800,
        description: "product 004 Some quick example text to build on the card title and make up the bulk of the card's content",
        deadings: [
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading001',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading002',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading003',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
        ]
    },
    {
        id: "a2c1f311-4cef-247c-3831-c1f18688c22d",
        title: 'product005',
        coverImage: './assets/img/phone-cover.jpg',
        price: 500,
        description: "product 005 Some quick example text to build on the card title and make up the bulk of the card's content",
        headings: [
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading001',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading002',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading003',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
        ]
    },
    {
        id: "64eba585-5aea-d0c1-fde0-74c9f4d6096c",
        title: 'product006',
        coverImage: './assets/img/phone-cover.jpg',
        price: 2000,
        description: "product 006 Some quick example text to build on the card title and make up the bulk of the card's content",
        headings: [
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading001',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading002',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
            {
                image: '../../assets/img/500x500.svg',
                title: 'Heading003',
                description: "product 001 some quick example text to build on the card title and make up the bulk of the card's content",
            },
        ]
    },
];