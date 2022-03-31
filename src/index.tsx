/* @refresh reload */
import { render } from 'solid-js/web';
import ProductsProvider from './context/ProductsContext';
import './index.css';
import App from './App';

render(
	() => (
		<ProductsProvider>
			<App />
		</ProductsProvider>
	),
	document.getElementById('root') as HTMLElement
);
