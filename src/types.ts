export interface IProductTile {
    name: string;
    image: string;
    basePrice: number;
    baseUnit: string;
    sku: string;
}
export interface IProductList {
    cursor: string;
    node?: {
        name: string, 
        id: string, 
        image: string, 
        sku: string, 
        prices: {
            basePrice: number, 
            baseUnit: string
            }
        }
}

export interface ICartData {
    reservation: null;
    couponCode: null;
    totals: {
        code: string;
        label: string;
        value: number;
        __typename: string;
    }[];
    minimumValue: number;
    missingValue: number;
    products: IProductTile[];
    __typename: string;
    deutschlandCardInfo: null;
}

export interface ICart {
    loading: boolean;
    data: ICartData | null | undefined;
}
