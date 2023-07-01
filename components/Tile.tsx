import React, { useState } from "react";
import Image from "next/image";
import { IProductTile } from "../src/types";

type TileProps = {
    productData: IProductTile;
};

const Tile: React.FC<TileProps> = ({ productData }) => {
    const [imageSrc, setImageSrc] = useState(
        `https:${productData.image}?imwidth=300`
    );
    console.log(productData);
    return (
        <figure className="tile-ctn">
            <Image
                src={imageSrc}
                onError={() => setImageSrc("/bm_logo.jpg")}
                width={300}
                height={300}
                alt="Product image"
            />
            <figcaption>{productData.name}</figcaption>
            <h4>
                {productData.basePrice}€ / {productData.baseUnit}
            </h4>
        </figure>
    );
};

export default Tile;
