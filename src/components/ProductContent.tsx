import { Component, For } from 'solid-js';
import Image from './Image';
import { Product } from '../../types';
interface ProductContentProps {
	product: Product;
}
const ProductContent: Component<ProductContentProps> = ({
	product,
}) => {
	return (
		<aside class="flex flex-col mb-2 rounded-sm">
			<Image
				src={product.image}
				loading="lazy"
				alt={product.title}
			/>

			<div class="container mx-auto xl:mt-3 mt-5 px-2">
				<h2 class="font-bold ">{product.title}</h2>
				<p class="text-gray-500">{product.description}</p>
			</div>
		</aside>
	);
};

export default ProductContent;
