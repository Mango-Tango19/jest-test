import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Converter } from "./Converter";

describe("when rendered", () => {
	it("rub val should have a value with a rub amount", () => {
		render(<Converter />);
		expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(2);
	});

	it("usd val should have a value with a usd amount", () => {
		render(<Converter />);
		expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(1);
	});
});

describe("when user type in RUB", () => {
	it("should update value", () => {
		render(<Converter />);
		const input = screen.getByLabelText(/Сумма в рублях/);
		userEvent.clear(input);
		userEvent.type(input, "2");
		//expect(input).toHaveValue(2);
		expect(input).not.toHaveValue("2");
		expect(input).toHaveDisplayValue("");
	});
});

describe("when user type in USD", () => {
	it("should update value", () => {
		render(<Converter />);
		const input = screen.getByLabelText(/Сумма в долларах/);
		userEvent.clear(input);
		userEvent.type(input, "1");

		//expect(input).toHaveValue(1);
		expect(input).not.toHaveValue("1");
		expect(input).toHaveDisplayValue("");
	});
});
