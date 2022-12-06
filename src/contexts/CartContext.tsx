import { useState, createContext, useContext } from 'react'
import { CartProductItem } from '../utils/interfaces.backend';

interface CartProviderProps {
    children: React.ReactNode;
}

interface CartContextData {
    productsCart: CartProductItem[];
    addProductToCart: (id: number) => void;
    getProductFromCart: (id: number) => CartProductItem | undefined;
    removeProductFromCart: (id: number) => void;
    clearProductsFromCart: () => void;
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

    function addProductToCart(id: number) {

    }

    function removeProductFromCart(id: number) {

    }

    function clearProductsFromCart() {
        setProductsCart([])
    }

    function getProductFromCart(id: number) {
        return productsCart.find((item) => item.id == id);
    }

    return (
        <CartContext.Provider
            value={{
                productsCart: productsCart,
                addProductToCart,
                getProductFromCart,
                removeProductFromCart,
                clearProductsFromCart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}