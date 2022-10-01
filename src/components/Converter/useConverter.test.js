import { renderHook } from "@testing-library/react-hooks";
import { useConverter } from "./useConverter";

const testRub = 100;
const course = 42;
const convertedDollars = 2.38;

describe("when rendered", () => {
	it("RUB input should have a val equal to initial RUB amount", () => {
		const { result } = renderHook(() => useConverter(testRub, course));
		expect(result.current.rub).toEqual(testRub);
	});
	it("USD input should have a val equal to calculated USD amount", () => {
		const { result } = renderHook(() => useConverter(testRub, course));
		expect(result.current.usd).toEqual(convertedDollars);
	});
});

describe("when call updateRub method", () => {
	it.todo("should update RUB val");
	it.todo("should calculate USD val");
});

describe("when call updateUsd method", () => {
	it.todo("should update USD val");
	it.todo("should recalculate RUB val");
});

describe("when re-rendered", () => {
	it.todo("should update its values");
});
