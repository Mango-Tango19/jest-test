import { quotes } from "./quotes";
import { selectRandomQuote } from "./selectRandomQuote";

beforeEach(() => {
	jest.spyOn(global.Math, "random").mockReturnValue(0.42);
});

afterEach(() => {
	jest.restoreAllMocks();
});

describe("when called with a quotes list", () => {
	it("should return the second (random) quote", () => {
		const res = selectRandomQuote(quotes);
		expect(res).toEqual(quotes[1]);
	});
});
