import { Component, For, onMount } from 'solid-js';
import { Product } from '../types';
import {
	ProductsContext,
	useProducts,
} from './context/ProductsContext';

import ProductContent from './components/ProductContent';
import ModalSelectedProducts from './components/ModalSelectedProducts';
import Header from './components/Header';
import ProductButton from './components/Button/ProductButton';
import api from './api';
const App: Component = () => {
	const [state, actions] = useProducts();

	return (
		<main>
			<Header />

			<section class="container mx-auto grid xl:grid-cols-3 grid-cols-1 xl:gap-3 gap-4">
				<For
					each={state.products}
					fallback={
						<div>El contenido no está disponible 😞</div>
					}
				>
					{(product) => (
						<article class="flex flex-col justify-between items-center w-full max-h-full hover:opacity-95 duration-100 ease-in-out">
							<ProductContent product={product} />
							{/* <ProductButton
								product={product}
								selectedProducts={selectedProducts}
								handleSelectedProducts={handleSelectedProducts}
							/> */}
						</article>
					)}
				</For>
			</section>

			<aside class="container mx-auto">
				{/* <ModalSelectedProducts
					selectedProducts={selectedProducts}
				/> */}
			</aside>
		</main>
	);
};

export default App;
