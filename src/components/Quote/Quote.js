import React from "react";
import { quotes } from "./quotes";
import { selectRandomQuote } from "./selectRandomQuote";

const defaultQuote = selectRandomQuote(quotes);

export const Quote = ({ quote = defaultQuote }) => {
	const { author, text } = quote;

	return (
		<footer>
			<blockquote>{text}</blockquote>
			<cite>{author}</cite>
		</footer>
	);
};
