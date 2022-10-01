import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";

describe("when rendered", () => {
	it("should contain an expected text", () => {
		render(<Quote />);
		const res = screen.getByText(/Test quote/);
		expect(res).toBeInTheDocument();
	});
});
