import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Tile.module.css";
import useCountInCart from "../src/hooks/useCountInCart";
import { IProductTile } from "../src/types";

type TileProps = {
    name: string;
    image: string;
    basePrice: number;
    baseUnit: string;
    sku: string;
    cart: IProductTile[];
};

const Tile: React.FC<TileProps> = ({
    name,
    image,
    basePrice,
    baseUnit,
    sku,
    cart,
}) => {
    const [imageSrc, setImageSrc] = useState(`https:${image}?imwidth=300`);

    return (
        <div className={styles.card}>
            <Image
                src={imageSrc}
                onError={() => setImageSrc("/bm_logo.jpg")}
                width={300}
                height={300}
                alt={name}
                placeholder="blur"
                blurDataURL="/bm_logo.jpg"
            />
            <h2>{name}</h2>
            <h4>
                {basePrice}€ / {baseUnit}
            </h4>
            <h6>Added to cart: {useCountInCart({ sku, cart })}</h6>
        </div>
    );
};

export default Tile;
