import type { NextPage } from "next";
import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { CartContext } from "../src/contexts/CartContext";
import useGetProducts from "../src/hooks/useGetProducts";
import styles from "../styles/Home.module.css";
import Search from "../src/components/Search";
import Loading from "../src/components/Loading";
import Cart from "../src/components/Cart";
import ProductList from "../src/components/ProductList";
import Footer from "../src/components/Footer";

const Home: NextPage = () => {
    // canRender is only to ensure that it is rendered as SPA
    // (disable server side rendering)
    const [canRender, setCanRender] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Use the CartContext to access the cart state and data
    const { cart } = useContext(CartContext);
    const products = useGetProducts();

    // Check if both products and cart data have finished loading
    // Set the isLoading state to false when both are loaded
    useEffect(() => {
        if (products.data && cart?.data) {
            setIsLoading(false);
        }
    }, [products.loading, cart?.loading]);

    useEffect(() => {
        setCanRender(true);
    }, []);

    if (!canRender) <Loading />;

    return (
        <div className={styles.container}>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <header>
                        <Search
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                        <Cart />
                    </header>
                    <main className={styles.main}>
                        <h1>Products</h1>
                        <pre data-testid="productCount">
                            {JSON.stringify(
                                products.data?.pageInfo.totalCount,
                                null,
                                4
                            )}{" "}
                            Products
                        </pre>
                        <ProductList
                            products={products.data?.edges}
                            searchQuery={searchQuery}
                        />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
};
export default Home;
