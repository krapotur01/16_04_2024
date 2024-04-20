import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: "m" | "l" | "s";
	color?: "ghost" | "grey" | "green" | "red" | "primary";
	children: ReactNode;
	href?: string;
}