import { createContext, useState, useEffect } from "react";
import useGetCart from "../hooks/useGetCart";
import { ICart } from "../types";

interface CartContextState {
    cart: ICart | null | undefined;
    setCart: (data: ICart | null) => void;
}

export const CartContext = createContext<CartContextState>({
    cart: null,
    setCart: () => {},
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<ICart | null | undefined>(null);

    const cartData = useGetCart();

    // When cart data changes, update the cart state accordingly
    // If cart data is not empty or falsy, set the cart state to the fetched data
    // Otherwise, set the cart state to null
    useEffect(() => {
        setCart(cartData?.data?.products ? cartData : null);
    }, [cartData]);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
