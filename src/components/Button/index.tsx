import { Component, JSX } from 'solid-js';

const Button: Component<
	JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
	return (
		<button
			class="text-center bg-blue-500 shadow-md text-white w-12 h-12 rounded-md mt-2 hover:bg-blue-600 duration-150 ease-in-out"
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
