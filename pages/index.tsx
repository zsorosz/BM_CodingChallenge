import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../src/contexts/CartContext";
import useGetProducts from "../src/hooks/useGetProducts";
import styles from "../styles/Home.module.css";
import Tile from "../src/components/Tile";
import Search from "../src/components/Search";
import Loading from "../src/components/Loading";

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
                        <div className={styles.cart}>
                            <Image
                                src="/shopping-cart.png"
                                width={30}
                                height={30}
                                alt="My shopping cart"
                            />
                            <pre>
                                {JSON.stringify(
                                    cart?.data?.products.length,
                                    null,
                                    4
                                )}
                            </pre>
                        </div>
                    </header>
                    <main className={styles.main}>
                        <h2>Products</h2>
                        <pre>
                            {JSON.stringify(
                                products.data?.pageInfo.totalCount,
                                null,
                                4
                            )}{" "}
                            Products
                        </pre>
                        <ul className={styles.grid}>
                            {products.data?.edges.map((product) =>
                                product.node.name
                                    .toLowerCase()
                                    .includes(searchQuery.toLowerCase()) ? (
                                    <li key={product.node.id}>
                                        <Tile
                                            name={product.node.name}
                                            image={product.node.image}
                                            basePrice={
                                                product.node.prices.basePrice
                                            }
                                            baseUnit={
                                                product.node.prices.baseUnit
                                            }
                                            sku={product.node.sku}
                                        />
                                    </li>
                                ) : null
                            )}
                        </ul>
                    </main>
                    <footer>Footer</footer>
                </>
            )}
        </div>
    );
};
export default Home;
