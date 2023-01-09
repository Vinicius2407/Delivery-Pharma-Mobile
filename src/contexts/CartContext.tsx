import axios from 'axios';
import { useState, createContext, useContext } from 'react'
import { CartProductItem, ProductDataBackend } from '../utils/interfaces.backend';

interface CartProviderProps {
    children: React.ReactNode;
}

interface CartContextData {
    productsCart: CartProductItem[];
    addProductToCart: (productItem: CartProductItem) => void;
    getProductFromCart: (id: number) => CartProductItem | undefined;
    removeProductFromCart: (id: number) => void;
    clearProductsFromCart: () => void;
    getProductCountFromCart:(id: number) => number;
    getTotalParcial:() => number;
}

/*const initialProducts = [
    {
        id: 2, 
        nome: 'Aspirina', 
        valor_unitario: 10, 
        imagem: 'https://uploads.consultaremedios.com.br/product_variation_images/full/48d430b6e54b51876833bd2e608a3ce0bcd83597.jpg?1646247692', 
        quantidade: 2
    }
]*/

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
    const [productsCart, setProductsCart] = useState<CartProductItem[]>([]);

    // const getProductIfNotExit = async(id:number) => {
    //     const { data } = await axios.get<ProductDataBackend>(`http://localhost:8080/produto/${id}`)
    //     return data;
    // }

    function addProductToCart(productItem: CartProductItem) {
        const copyProductsCart = [...productsCart]

        const item = copyProductsCart.find((product) => product.id == productItem.id)

        if (!item) {
                copyProductsCart.push({
                    ...productItem
                })
        }else {
            item.quantidade = item.quantidade + productItem.quantidade
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

    function getProductCountFromCart(id: number) {
        const product = productsCart.find((item) => item.id == id)
        if (product) {
            return product.quantidade
        }else {
            return 0
        }
    }

    function getTotalParcial() {
        let totalParcial = 0;
        productsCart.forEach((item) => totalParcial = totalParcial + (item.quantidade * item.valor_unitario))

        return totalParcial
    }

    return (
        <CartContext.Provider
            value={{
                productsCart,
                addProductToCart,
                getProductFromCart,
                removeProductFromCart,
                clearProductsFromCart,
                getProductCountFromCart,
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