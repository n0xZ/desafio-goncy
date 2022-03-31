import { Component, JSX } from 'solid-js';

const Image: Component<
	JSX.ImgHTMLAttributes<HTMLImageElement>
> = ({ ...rest }) => {
	return <img {...rest}  class="rounded-sm  aspect-auto" />;
};

export default Image;
