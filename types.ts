import { Store } from 'solid-js/store';

export interface Product {
	id: string;
	title: string;
	description: string;
	image: string;
	price: number;
}
export interface SelectedProducts {
	products: Product[];
	price: number;
}

export interface ProductState {
	products: Product[];
	selectedProducts: SelectedProducts;
}
export type ProductContextState = Store<ProductState>;

export interface ProductStoreGetters {
	getProducts: () => Product[];
	getSelectedProducts: () => SelectedProducts;
}
export interface ProductActions {
	handleSelectedProducts: (product: Product) => void;
	setInitialProducts: () => Promise<Product[]> | undefined;
}
export type ProductContext = [
	state: ProductContextState,
	actions: {
		handleSelectedProducts: (product: Product) => void;
		setInitialProducts: () => Promise<Product[]> | undefined;
	}
];
