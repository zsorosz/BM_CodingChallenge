import { useEffect, useState } from "react";
import { IProductTile } from "../types";

type CountInCartProps = {
    sku: string;
    cart: IProductTile[]
}

const useCountInCart = ({
    sku, cart
    }: CountInCartProps) => {
    const [count, setCount] = useState(0)
    const findInCart = (): void => {
        const matchingProducts = cart.filter((product) => product.sku === sku);
        setCount(matchingProducts.length)
    }
    useEffect(() => {
           findInCart()
    }, []);

    return count
}

export default useCountInCart;