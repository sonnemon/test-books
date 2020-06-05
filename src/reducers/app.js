import { SET_IS_LOADING, SET_LIST_BOOKS } from '../constants';

const INITIAL_STATE = {
	isLoading: true,
	count: 0,
	listBooks: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: payload
			};
		case SET_LIST_BOOKS:
			return {
				...state,
				listBooks: payload
			};
		default:
			return state;
	}
};
