import { createSlice } from "@reduxjs/toolkit";

// Khai báo khởi tạo state
const initialState = {
    listXeMay: [] // Chứa danh sách xe máy
};

// Thiết lập cho reducer và định nghĩa các action
const xeMaySlice = createSlice({
    name: 'xeMay',
    initialState, // Đảm bảo rằng initialState được thiết lập đúng
    reducers: {
        // Làm việc với store cục bộ
        addXeMay(state, action) {
            state.listXeMay.push(action.payload);
        },
        setXeMays(state, action) {
            state.listXeMay = action.payload;
        },
        updateXeMay(state, action) {
            const { id, updatedXeMay } = action.payload;
            const index = state.listXeMay.findIndex(xe => xe.id === id);
            if (index !== -1) {
                state.listXeMay[index] = { ...state.listXeMay[index], ...updatedXeMay };
            }
        },
        deleteXeMay(state, action) {
            state.listXeMay = state.listXeMay.filter(xe => xe.id !== action.payload);
        },
        clearXeMay: (state) => {
            state.listXeMay = [];
        },
    },
    extraReducers: builder => {
        // Viết các thao tác khác
    }
});

// export các thành phần
export const { addXeMay, deleteXeMay, updateXeMay, clearXeMay } = xeMaySlice.actions;
export default xeMaySlice.reducer;