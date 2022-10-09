import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import course, { initialCourseState } from "../store/features/course/slice";

const reducer = combineReducers({ course });

const originalState = {
	course: initialCourseState,
};

export function renderWithStore(
	ui,
	{ state = originalState, dispatch = null } = {}
) {
	const middleWare = applyMiddleware(thunk);
	const storeMock = createStore(reducer, state, middleWare);

	return render(<Provider store={storeMock}>{ui}</Provider>);
}
