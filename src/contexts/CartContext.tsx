import axios from 'axios';
import { useState, createContext, useContext } from 'react'
import { CartProductItem, ProductDataBackend } from '../utils/interfaces.backend';

interface CartProviderProps {
    children: React.ReactNode;
}

interface CartContextData {
    productsCart: CartProductItem[];
    addProductToCart: (id: number) => void;
    getProductFromCart: (id: number) => CartProductItem | undefined;
    removeProductFromCart: (id: number) => void;
    clearProductsFromCart: () => void;
    getTotalParcial:() => number;
}

const initialProducts = [{ 
        id: 1, 
        nome: 'Neosoro', 
        valor_unitario: 5, 
        imagem: 'https://uploads.consultaremedios.com.br/product_images/full/38250f5ffcc40294856cccd8e11bb40b5b5514b1.png?1668441530', 
        quantidade: 1 
    },
    {
        id: 2, 
        nome: 'Aspirina', 
        valor_unitario: 10, 
        imagem: 'https://uploads.consultaremedios.com.br/product_variation_images/full/48d430b6e54b51876833bd2e608a3ce0bcd83597.jpg?1646247692', 
        quantidade: 2
    }
]

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
    const [productsCart, setProductsCart] = useState<CartProductItem[]>(initialProducts);

    // const getProductIfNotExit = async(id:number) => {
    //     const { data } = await axios.get<ProductDataBackend>(`http://localhost:8080/produto/${id}`)
    //     return data;
    // }

    function addProductToCart(id: number) {
        const copyProductsCart = [...productsCart]

        const item = copyProductsCart.find((product) => product.id == id)

        if (!item) {
            // axios.get(`http://localhost:8080/produto/${id}`)
            //     .then((resp) => {
            //         const result = resp.data as ProductDataBackend
            //         copyProductsCart.push({
            //             id,
            //             nome: result.nome,
            //             imagem: result.imagem,
            //             valor_unitario: result.valor_unitario,
            //             quantidade: 1
            //         })
            //         setProductsCart(copyProductsCart)
            //     }).catch((error) => console.log(error))
        }else {
            item.quantidade = item.quantidade + 1
        }

        setProductsCart(copyProductsCart)
    }

    function removeProductFromCart(id: number) {
        const copyProductsCart = [...productsCart]

        const item = copyProductsCart.find((product) => product.id == id)

        if(item && item.quantidade > 1) {
            item.quantidade = item.quantidade - 1
            setProductsCart(copyProductsCart)
        }else {
            const arrayFiltered = copyProductsCart.filter((product) => product.id != id)
            setProductsCart(arrayFiltered)
        }
    }

    function clearProductsFromCart() {
        setProductsCart([])
    }

    function getProductFromCart(id: number) {
        return productsCart.find((item) => item.id == id);
    }

    function getTotalParcial() {
        let totalParcial = 0;
        productsCart.forEach((item) => totalParcial = totalParcial + (item.quantidade * item.valor_unitario))

        return totalParcial
    }

    return (
        <CartContext.Provider
            value={{
                productsCart: productsCart,
                addProductToCart,
                getProductFromCart,
                removeProductFromCart,
                clearProductsFromCart,
                getTotalParcial,
            }}
        >
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}