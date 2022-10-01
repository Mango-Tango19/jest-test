import { rubToUsd, usdToRub } from "./converter";

describe("when convert to usd", () => {
	it("should return amount", () => {
		const res = rubToUsd(10, 50);
		expect(res).toEqual(0.2);
	});
});

describe("when convert to rub", () => {
	it("should return amount", () => {
		const testCases = [
			{ usd: 10, course: 10, rub: 100 },
			{ usd: 10, course: 1.5, rub: 15 },
			{ usd: 10, course: 3.1415926, rub: 31.42 },
		];

		testCases.forEach(({ usd, course, rub }) => {
			const res = usdToRub(usd, course);
			expect(res).toEqual(rub);
		});
	});
});
