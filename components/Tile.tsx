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
        </div>
    );
};

export default Tile;
