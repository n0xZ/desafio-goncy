import { createContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Product, SelectedProducts } from '../../types';
interface ProductsStore {
	products: Product[];

	selectedProducts: SelectedProducts;
	price: number;
}

const [state, setState] = createStore<ProductsStore>({
	products: [],
	price: 0,
	selectedProducts: { price: 0, products: [] },
});
