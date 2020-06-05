import { SET_IS_LOADING, FETCH_BOOKS } from '../constants';

export const setIsLoading = (payload) => ({
	type: SET_IS_LOADING,
	payload
});

export const fetchListBooks = (payload) => ({
	type: FETCH_BOOKS,
	payload
});
