import { Accessor, Component } from 'solid-js';
import AddProductButton from './AddProductButton';
import AmountProductButton from './AmountProductButton';
import { Product, SelectedProducts } from '../../../types';
interface ProductButtonProps {
	product: Product;
	selectedProducts: Accessor<SelectedProducts>;
	handleSelectedProducts: (product: Product) => void;
}
const ProductButton: Component<ProductButtonProps> = ({
	selectedProducts,
	product,
	handleSelectedProducts,
}) => {
	return (
		<>
			{selectedProducts().products.length > 0 ? (
				selectedProducts().products.filter(
					(selectedProd) => selectedProd.id === product.id
				).length !== 0 ? (
					<AmountProductButton product={product} />
				) : (
					<AddProductButton
						product={product}
						handleSelectedProducts={handleSelectedProducts}
					/>
				)
			) : (
				<AddProductButton
					product={product}
					handleSelectedProducts={handleSelectedProducts}
				/>
			)}
		</>
	);
};

export default ProductButton;
