import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Cart: React.FunctionComponent = () => {
    const { cart } = useContext(CartContext);
    return (
        <div className={styles.cart}>
            <Image
                src="/shopping-cart.png"
                width={30}
                height={30}
                alt="My shopping cart"
            />
            <pre>{JSON.stringify(cart?.data?.products.length, null, 4)}</pre>
        </div>
    );
};

export default Cart;
