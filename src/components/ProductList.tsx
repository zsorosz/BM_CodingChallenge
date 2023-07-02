import React from "react";
import styles from "../../styles/Home.module.css";
import Tile from "./Tile";
import { IProductList } from "../types";

type ProductListProps = {
    products: IProductList[] | undefined;
    searchQuery: string;
};

const ProductList: React.FunctionComponent<ProductListProps> = ({
    products,
    searchQuery,
}) => {
    return (
        <ul className={styles.grid}>
            {products?.map((product) =>
                product.node?.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ? (
                    <li key={product.node.id}>
                        <Tile
                            name={product.node.name}
                            image={product.node.image}
                            basePrice={product.node.prices.basePrice}
                            baseUnit={product.node.prices.baseUnit}
                            sku={product.node.sku}
                        />
                    </li>
                ) : null
            )}
        </ul>
    );
};

export default ProductList;
