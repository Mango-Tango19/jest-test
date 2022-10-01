import { render, screen } from "@testing-library/react";
import { Converter } from "./Converter";

describe("when rendered", () => {
	it("rub val should have a value with a rub amount", () => {
		render(<Converter />);
		expect(screen.getByAltText(/Сумма в рублях/)).toHaveValue(2);
	});

	it("usd val should have a value with a rub amount", () => {
		render(<Converter />);
		expect(screen.getByAltText(/Сумма в долларах/)).toHaveValue(32);
	});
});
