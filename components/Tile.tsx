import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Tile.module.css";

type TileProps = {
    name: string;
    image: string;
    basePrice: number;
    baseUnit: string;
    sku: string;
};

const Tile: React.FC<TileProps> = ({
    name,
    image,
    basePrice,
    baseUnit,
    sku,
}) => {
    const [imageSrc, setImageSrc] = useState(`https:${image}?imwidth=300`);
    return (
        <figure className={styles.card}>
            <Image
                src={imageSrc}
                onError={() => setImageSrc("/bm_logo.jpg")}
                width={300}
                height={300}
                alt="Product image"
                placeholder="blur"
                blurDataURL="/bm_logo.jpg"
            />
            <figcaption>{name}</figcaption>
            <h4>
                {basePrice}€ / {baseUnit}
            </h4>
        </figure>
    );
};

export default Tile;
