import { User } from './user';

export type Pets = {
    id: number;
    name: string;
    species: string;
    weight: number;
    breed: string;
    image: string;
    adopted: boolean;
    user: User;
    adopter: User;
}

export type PetsPage = {
    content: Pets[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}