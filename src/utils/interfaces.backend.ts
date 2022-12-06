export interface ProductDataBackend {
    bula: null,
    categoria: {
        descricao: string,
        id: number,
    },
    conteudo: string | null,
    descricao: string,
    dh_registro: null,
    fabricante: string,
    formula: string | null,
    id: number,
    imagem: string | null,
    nome: string,
    precisa_receita: boolean,
    precisa_recolher_receita: boolean | null,
    uso: string,
    valor_unitario: number
}

export interface CategoryDataBackend {
    id: number;
    descricao: string;
    // icon?: keyof typeof ;
}

export interface CartProductItem {
    id: number;
    nome: string
    imagem: string;
    valor_unitario: number;
    quantidade: number;
    // valor_total: number;
}