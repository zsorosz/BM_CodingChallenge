import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import useGetCart from "../src/hooks/useGetCart";
import useGetProducts from "../src/hooks/useGetProducts";
import styles from "../styles/Home.module.css";
import Tile from "../components/Tile";

const Home: NextPage = () => {
    const products = useGetProducts();
    const cart = useGetCart();
    console.log(products);

    // canRender is only to ensure that it is rendered as SPA
    // (disable server side rendering)
    const [canRender, setCanRender] = useState(false);
    useEffect(() => {
        setCanRender(true);
    }, []);
    if (!canRender) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>

            <section className={styles.container}>
                <h1>Cart</h1>
                <pre>{JSON.stringify(cart.data?.products.length, null, 4)}</pre>
                <ul className={styles.grid}>
                    {cart.data?.products.map((product) => (
                        <li key={product.id}>
                            <Tile
                                name={product.name}
                                image={product.image}
                                basePrice={product.basePrice}
                                baseUnit={product.baseUnit}
                                sku={product.sku}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <h2>Products</h2>
            <pre>
                {JSON.stringify(products.data?.pageInfo.totalCount, null, 4)}
            </pre>
            <ul className={styles.grid}>
                {products.data?.edges.map((product) => (
                    <li key={product.node.id}>
                        <Tile
                            name={product.node.name}
                            image={product.node.image}
                            basePrice={product.node.prices.basePrice}
                            baseUnit={product.node.prices.baseUnit}
                            sku={product.node.sku}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Home;
