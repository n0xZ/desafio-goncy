import { Component, Accessor } from 'solid-js';
import { Product, SelectedProducts } from '../../types';
interface SelectedProductsProps {
	selectedProducts: Accessor<SelectedProducts>;
}
const ModalSelectedProducts: Component<
	SelectedProductsProps
> = ({ selectedProducts }) => {
	return (
		<button class="text-bold">
			{`${
				selectedProducts().products.length
			} productos (total: $${selectedProducts().price})`}
		</button>
	);
};

export default ModalSelectedProducts;
