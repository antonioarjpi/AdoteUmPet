import { Usuario } from './user';

export type Pets = {
    id: number;
    nome: string;
    tipo: string;
    peso: number;
    raca: string;
    imagem: string;
    adotado: boolean;
    usuario: Usuario;
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