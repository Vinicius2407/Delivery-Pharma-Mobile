// import { useState, createContext, useContext } from 'react'

// interface CartProviderProps {
//     children: React.ReactNode;
// }

// interface ProductCartProps {
//     id: number;
//     quantidade: number;
// }

// interface CartContextData {
//     productsCart: ProductCartProps[];
//     addProductToCart: (id: number) => void;
//     removeProductFromCart: (id: number) => void;
//     clearProductsFromCart: () => void;
// }

// const initialProducts = {
//     id: 1,
//     quantidade: 1
// } as ProductCartProps

// const CartContext = createContext({} as CartContextData)

// export function CartProvider({ children }: CartProviderProps) {
//     const [productsCart, setProductsCart] = useState<ProductCartProps[]>([initialProducts]);

//     function addProductToCart(id: number) {

//     }

//     function removeProductFromCart(id: number) {

//     }

//     function clearProductsFromCart() {
//         setProductsCart([])
//     }

//     return (
//         <CartContext.Provider
//             value={{
//                 productsCart,
//                 addProductToCart,
//                 removeProductFromCart,
//                 clearProductsFromCart
//             }}
//         >
//             { children }
//         </CartContext.Provider>
//     )
// }

// export function useCart() {
//     return useContext(CartContext)
// }