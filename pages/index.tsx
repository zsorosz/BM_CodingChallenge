import type { NextPage } from "next";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../src/contexts/CartContext";
import useGetProducts from "../src/hooks/useGetProducts";
import styles from "../styles/Home.module.css";
import Loading from "../src/components/Loading";
import ProductList from "../src/components/ProductList";
import Header from "../src/components/Header";

const Home: NextPage = () => {
    // canRender is only to ensure that it is rendered as SPA
    // (disable server side rendering)
    const [canRender, setCanRender] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Use the CartContext to access the cart state and data
    const { cart } = useContext(CartContext);

    //tbd: move products data to own context
    const products = useGetProducts();

    // Check if both products and cart data have finished loading
    // Set the isLoading state to false when both are loaded
    useEffect(() => {
        if (products.data && cart?.data && canRender) {
            setIsLoading(false);
        }
    }, [products.loading, cart?.loading]);

    useEffect(() => {
        setCanRender(true);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Header
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <main className={styles.main}>
                        <ProductList
                            listName="Products"
                            itemCount={JSON.stringify(
                                products.data?.pageInfo.totalCount,
                                null,
                                4
                            )}
                            products={products.data?.edges}
                            searchQuery={searchQuery}
                        />
                    </main>
                </>
            )}
        </>
    );
};
export default Home;
