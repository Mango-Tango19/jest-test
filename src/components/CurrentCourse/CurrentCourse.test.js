import { screen } from "@testing-library/react";
import { renderWithStore } from "../../testUtils";
import CurrentCourse from "./CurrentCourse";

describe("when rendered with course value", () => {
	it("should contain the value in the body", () => {
		const stateMock = { course: { value: 100500 } };
		renderWithStore(<CurrentCourse />, { state: stateMock });
		expect(screen.getByText(/100500Р/)).toBeInTheDocument();
	});
});
