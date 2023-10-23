import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import CartContextProvider from "../src/contexts/CartContext";
import Footer from "../src/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartContextProvider>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>
            <Component {...pageProps} />
            <Footer />
        </CartContextProvider>
    );
}
