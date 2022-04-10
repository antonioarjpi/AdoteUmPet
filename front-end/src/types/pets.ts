export type Pets = {
    id: number;
    nome: string;
    tipo: string;
    peso: number;
    local: string;
    imagem1: string;
    imagem2: string;
    imagem3: string;
    adotado: boolean;
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