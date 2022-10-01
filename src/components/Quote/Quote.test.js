import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

describe("when rendered", () => {
	it("should contain an expected text", () => {
		render(<Quote />);
		const testQuote = quotes[0];
		const res = screen.getByText(testQuote.text);
		expect(res).toBeInTheDocument();
	});
});
