import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Tile.module.css";
import useCountInCart from "../hooks/useCountInCart";

type TileProps = {
    name: string;
    image: string;
    basePrice: number;
    baseUnit: string;
    sku: string;
};

const Tile: React.FunctionComponent<TileProps> = ({
    name,
    image,
    basePrice,
    baseUnit,
    sku,
}) => {
    const [imageSrc, setImageSrc] = useState(
        image ? `https:${image}?imwidth=300` : "/bm_logo.jpg"
    );

    return (
        <div className={styles.card}>
            <Image
                src={imageSrc}
                onError={() => setImageSrc("/bm_logo.jpg")} //sets the image source to the fallback image
                width={300}
                height={300}
                alt={name}
            />
            <h2>{name}</h2>
            <h3>
                {basePrice}€ / {baseUnit}
            </h3>
            <h4 data-testid="countInCart">
                Added to cart: {useCountInCart({ sku })}
            </h4>
        </div>
    );
};

export default Tile;
