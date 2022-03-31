import { Component, For, onMount } from 'solid-js';

import { createSignal } from 'solid-js';
import ProductContent from './components/ProductContent';
import ModalSelectedProducts from './components/ModalSelectedProducts';
import { Product, SelectedProducts } from '../types';
import api from './api';
import Header from './components/Header';
import ProductButton from './components/Button/ProductButton';

const App: Component = () => {
	const [products, setProducts] = createSignal<Product[]>(
		[]
	);

	const [selectedProducts, setSelectedProducts] =
		createSignal<SelectedProducts>({
			price: 0,
			products: [],
		});
	const setInitialProducts = async () => {
		const data = await api.list();
		setProducts(data);
	};

	const handleSelectedProducts = (product: Product) => {
		const actualPrice =
			selectedProducts().price + product.price;
		setSelectedProducts({
			price: actualPrice,
			products: [...products(), product],
		});
	};
	onMount(() => setInitialProducts());

	return (
		<main>
			<Header />

			<section class="container mx-auto grid xl:grid-cols-3 grid-cols-1 xl:gap-3 gap-4">
				<For
					each={products()}
					fallback={
						<div>El contenido no está disponible 😞</div>
					}
				>
					{(product) => (
						<article class="flex flex-col justify-between items-center w-full max-h-full hover:opacity-95 duration-100 ease-in-out">
							<ProductContent product={product} />
							<ProductButton
								product={product}
								selectedProducts={selectedProducts}
								handleSelectedProducts={handleSelectedProducts}
							/>
						</article>
					)}
				</For>
			</section>

			<aside class="container mx-auto">
				<ModalSelectedProducts
					selectedProducts={selectedProducts}
				/>
			</aside>
		</main>
	);
};

export default App;
