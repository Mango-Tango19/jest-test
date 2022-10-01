import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

beforeEach(() => {
	jest.spyOn(global.Math, "random").mockReturnValue(0.42);
});

afterEach(() => {
	jest.restoreAllMocks();
});

describe("when rendered", () => {
	const { text, author } = quotes[1];

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
