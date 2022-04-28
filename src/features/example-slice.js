import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    items: null,
    loading: false,
    error: false
}

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        send_request(state) {
///immer makes it immurable under the hood
            state.loading = true
        },
        request_error(state) {
            state.error = true
        }
    }
})

export const { send_request, request_error } = requestSlice.actions

export default requestSlice.reducer