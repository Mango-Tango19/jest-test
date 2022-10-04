import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Converter } from "./Converter";

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();

jest.mock("./useConverter", () => ({
	useConverter() {
		return {
			rub: 100,
			usd: 2.38,
			updateRub: mockUpdateRub,
			updateUsd: mockUpdateUsd,
		};
	},
}));

describe("when rendered", () => {
	it("rub val should have a value with a rub amount", () => {
		render(<Converter />);
		expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
	});

	it("usd val should have a value with a usd amount", () => {
		render(<Converter />);
		expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38);
	});
});

describe("when user type in RUB", () => {
	it("should update value", () => {
		render(<Converter />);
		const input = screen.getByLabelText(/Сумма в рублях/);
		userEvent.clear(input);
		userEvent.type(input, "2");
	});
});

describe("when user type in USD", () => {
	it("should update value", () => {
		render(<Converter />);
		const input = screen.getByLabelText(/Сумма в долларах/);
		userEvent.clear(input);
		userEvent.type(input, "1");
	});
});
