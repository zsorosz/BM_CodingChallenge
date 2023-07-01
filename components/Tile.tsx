import React from "react";
import { IProductTile } from "../src/types";

type TileProps = {
    productData: IProductTile;
};

const Tile: React.FC<TileProps> = ({ productData }) => {
    return <div>{productData.basePrice}</div>;
};

export default Tile;
