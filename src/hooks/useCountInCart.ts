import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { IProductTile } from "../types";

// Custom hook to count the number of products with a specific SKU in the cart

type CountInCartProps = {
    sku: string;
}

const useCountInCart = ({
    sku
    }: CountInCartProps): number | null => {
    const [count, setCount] = useState(0);

    // Access the cart state from the CartContext
    const { cart } = useContext(CartContext);

    const findInCart = (): void => {
        if(!cart?.data) return;
        // Find products in the cart that match the provided SKU
        // Update the count state with the length of the matching products array
        const matchingProducts = cart.data.products.filter((product: IProductTile) => product.sku === sku);
        setCount(matchingProducts?.length)
    }

    // Whenever the cart data changes, trigger the counting logic
    // to update the count state
    useEffect(() => {
        if(cart?.data) {
            findInCart()
        }
    }, [cart]);

    return count
}

export default useCountInCart;