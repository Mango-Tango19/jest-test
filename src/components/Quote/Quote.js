import React from "react";
import { quotes } from "./quotes";

export const Quote = () => {
	const randomIdx = Math.floor(Math.random() * quotes.length);
	const { text, author } = quotes[randomIdx];
	return (
		<>
			<blockquote>{text}</blockquote>
			<cite>{author}</cite>
		</>
	);
};
