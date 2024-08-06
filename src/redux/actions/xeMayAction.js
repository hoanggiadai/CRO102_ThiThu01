import { addXeMay, clearXeMay } from "../reducers/xeMayReducer";

const api_url = 'http://192.168.2.4:3000/XeMay';

export const fetchXeMays = () => {
    return async dispatch => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            // Dữ liệu được lấy từ API, duyệt mảng và lưu và store
            // console.log(data);
            dispatch(clearXeMay());
            data.forEach(row => {
                dispatch(addXeMay(row));
            });
        } catch (error) {
            console.log('Error fetching xeMays: ', error);
        }
    };
};

export const createXeMay = (xeMay) => {
    return async dispatch => {
        try {
            const response = await fetch(api_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(xeMay),
            });
            const data = await response.json();
            dispatch(addXeMay(data));
        } catch (error) {
            console.log('Error creating XeMay: ', error);
        }
    };
};

export const updateXeMay = (id, updatedXeMay) => {
    return async dispatch => {
        try {
            await fetch(`${api_url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedXeMay),
            });
            dispatch(updateXeMay({ id, updatedXeMay }));
        } catch (error) {
            console.log('Error editing XeMay: ', error);
        }
    };
};

export const deleteXeMay = (id) => {
    return async dispatch => {
        try {
            await fetch(`${api_url}/${id}`, {
                method: 'DELETE',
            });
            dispatch(deleteXeMay(id));
        } catch (error) {
            console.log('Error removing xe may: ', error);
        }
    };
};