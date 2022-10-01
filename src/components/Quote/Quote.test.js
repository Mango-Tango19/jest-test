import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

describe("when rendered", () => {
	const { text, author } = quotes[0];

	it("should contain an expected text", () => {
		render(<Quote />);

		const res = screen.getByText(new RegExp(text));
		expect(res).toBeInTheDocument();
	});

	it("should contain an expected author", () => {
		render(<Quote />);
		const res = screen.getByText(new RegExp(author));
		expect(res).toBeInTheDocument();
	});
});
