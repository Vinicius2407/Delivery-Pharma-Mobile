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
    imagem: string | null;
    valor_unitario: number;
    quantidade: number;
    // valor_total: number;
}

export interface AddressBackendProps {
    id?: string;
    cep: string;
    descricao: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    principal: boolean;
    observacao: string;
}