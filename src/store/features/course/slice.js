import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialCourseState = { value: 42, status: "idle", error: null };

export const fetchTodayCourse = createAsyncThunk(
	"course/fetchCourse",
	async () => {
		const res = await fetchCourse();
		return res.course;
	}
);

const courseSlice = createSlice({
	name: "course",
	initialState: initialCourseState,
	extraReducers: {
		[fetchTodayCourse.pending]: (state) => state,
		[fetchTodayCourse.fulfilled]: (state) => state,
		[fetchTodayCourse.error]: (state) => state,
	},
});

export const selectCourse = (state) => state.course.value;
export default courseSlice.reducer;
