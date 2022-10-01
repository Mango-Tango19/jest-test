import { quotes } from "./quotes";

export const selectRandomQuote = () => {
	const randomIdx = Math.floor(Math.random() * quotes.length);

	return quotes[randomIdx];
};
