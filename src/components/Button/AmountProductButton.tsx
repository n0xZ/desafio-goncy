import { Component } from 'solid-js';
import Button from '.';
import { Product } from '../../../types';
interface AmountProductButtonProps {
	product: Product;
}
const AmountProductButton: Component<
	AmountProductButtonProps
> = () => {
	return (
		<aside class="w-full flex flex-row justify-between bg-blue-500">
			<Button>+</Button>
			<Button>-</Button>
		</aside>
	);
};

export default AmountProductButton;
