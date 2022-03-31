import api from '../api';
import { onMount } from 'solid-js';
import { createContext, Component } from 'solid-js';

import { createStore, Store } from 'solid-js/store';
import {
	Product,
	ProductState,
	ProductContext,
	ProductActions,
} from '../../types';
import { useContext } from 'solid-js';

const INITIAL_STATE: ProductState = {
	products: [],
	selectedProducts: { price: 0, products: [] },
};
export const ProductsContext =
	createContext<ProductContext>([
		INITIAL_STATE,
		{
			setInitialProducts: () => undefined,
			handleSelectedProducts: () => undefined,
		},
	]);

const ProductsProvider: Component = ({ children }) => {
	const [state, setState] = createStore<ProductState>({
		...INITIAL_STATE,
	});
	const actions: ProductActions = {
		handleSelectedProducts(product: Product) {
			const actualPrice =
				state.selectedProducts.price + product.price;
			setState('selectedProducts', {
				price: actualPrice,
				products: [...state.selectedProducts.products, product],
			});
		},
		async setInitialProducts() {
			let response = [] as Product[];
			const data = await api.list().then((res) => {
				response = res;
			});
			return response;
		},
	};

	console.log("Me encuentro acá<")
	return (
		<ProductsContext.Provider value={[state, actions]}>
			{' '}
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;

export const useProducts = () =>
	useContext(ProductsContext);
