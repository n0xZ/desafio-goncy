import { Component } from 'solid-js';
import Button from '.';
import { Product } from '../../../types';
interface AddProductButtonProps {
	product: Product;
	handleSelectedProducts: (product: Product) => void;
}
const AddProductButton: Component<
	AddProductButtonProps
> = ({ handleSelectedProducts, product }) => {
	return (
		<Button
			onClick={() => {
				handleSelectedProducts(product);
			}}
		>
			Agregar
		</Button>
	);
};

export default AddProductButton;
