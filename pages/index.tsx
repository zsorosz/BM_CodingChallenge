import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import useGetCart from "../src/hooks/useGetCart";
import useGetProducts from "../src/hooks/useGetProducts";
import styles from "../styles/Home.module.css";
import Tile from "../components/Tile";
import Search from "../components/Search";

const Home: NextPage = () => {
    const [productsLoading, setProductsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    // canRender is only to ensure that it is rendered as SPA
    // (disable server side rendering)
    const [canRender, setCanRender] = useState(false);

    const products = useGetProducts();
    const cart = useGetCart();

    useEffect(() => {
        if (!products.loading) {
            setProductsLoading(false);
        }
    }, [products.loading]);

    useEffect(() => {
        setCanRender(true);
    }, []);
    if (!canRender) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <header>
                <Head>
                    <title>Bringmeister Coding Challenge</title>
                </Head>
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <div className={styles.cart}>
                    <h1>Cart</h1>
                    <pre>
                        {JSON.stringify(cart.data?.products.length, null, 4)}{" "}
                        Items
                    </pre>
                </div>
            </header>

            {!productsLoading ? (
                <main className={styles.main}>
                    <section>
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
                    </section>
                </main>
            ) : (
                <p>Loading products...</p>
            )}
            <footer>Footer</footer>
        </div>
    );
};
export default Home;
