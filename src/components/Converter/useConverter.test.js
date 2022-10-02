import { renderHook, act } from "@testing-library/react-hooks";
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
	it("should update RUB val", () => {
		const { result } = renderHook(() => useConverter(testRub, course));

		act(() => {
			result.current.updateRub(10);
		});

		expect(result.current.rub).toEqual(10);
	});
	it("should calculate USD val", () => {
		const { result } = renderHook(() => useConverter(testRub, course));

		act(() => {
			result.current.updateRub(10);
		});

		expect(result.current.usd).toEqual(0.24);
	});
});

describe("when call updateUsd method", () => {
	it("should update USD val", () => {
		const { result } = renderHook(() => useConverter(testRub, course));

		act(() => {
			result.current.updateUsd(10);
		});

		expect(result.current.usd).toEqual(10);
	});
	it("should recalculate RUB val", () => {
		const { result } = renderHook(() => useConverter(testRub, course));

		act(() => {
			result.current.updateUsd(10);
		});

		expect(result.current.rub).toEqual(420);
	});
});

describe("when re-rendered", () => {
	it.todo("should update its values");
});
