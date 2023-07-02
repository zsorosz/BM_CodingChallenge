import type { AppProps } from "next/app";
import "../styles/globals.css";
import CartContextProvider from "../src/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartContextProvider>
            <Component {...pageProps} />;
        </CartContextProvider>
    );
}
