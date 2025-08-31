import axios from 'axios';
import { GET_INCOMES, INCOME_ERROR, ADD_INCOME, DELETE_INCOME, UPDATE_INCOME } from './types';
import { setAlert } from './alert';

const API_URL = 'https://expence-tracker-backend-w1v0.onrender.com' || 'http://localhost:5000';
export const getIncomes = () => async dispatch => {
    try {
        const res = await axios.get(`${API_URL}/api/income`);
        dispatch({ type: GET_INCOMES, payload: res.data });
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const addIncome = formData => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
        const res = await axios.post(`${API_URL}/api/income`, formData, config);
        dispatch({ type: ADD_INCOME, payload: res.data });
        dispatch(setAlert('Income Added', 'success'));
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const deleteIncome = id => async dispatch => {
    try {
        await axios.delete(`${API_URL}/api/income/${id}`);
        dispatch({ type: DELETE_INCOME, payload: id });
        dispatch(setAlert('Income Removed', 'success'));
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const updateIncome = (id, formData) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
        const res = await axios.put(`${API_URL}/api/income/${id}`, formData, config);
        dispatch({ type: UPDATE_INCOME, payload: res.data });
        dispatch(setAlert('Income Updated', 'success'));
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};
