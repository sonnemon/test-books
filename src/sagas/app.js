import { call, takeLatest, put, select } from 'redux-saga/effects';
import { api, apiRest } from '../apis';

import { FETCH_BOOKS, SET_LIST_BOOKS } from '../constants';

function* fetchBooks({ payload }) {
	try {
		const { data: dataAuthors } = yield call(apiRest, {}, '5e1684a93000002c00d5608e', {});
		let newListAuthors = {};
		dataAuthors.map((author) => {
			newListAuthors = {
				...newListAuthors,
				[author.id]: author.name
			};
		});
		const result = yield call(apiRest, {}, '5e1683a23000004d00d56089', {});

		const newList = result.data.map((book) => {
			return {
				...book,
				author: newListAuthors[book.authorId]
			};
		});

		yield put({
			type: SET_LIST_BOOKS,
			payload: newList
		});
	} catch (error) {
		console.log(error);
	}
}

export default [ takeLatest(FETCH_BOOKS, fetchBooks) ];
