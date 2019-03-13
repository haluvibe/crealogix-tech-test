// src/store/counter/counterReducer.js
import * as types from './counterActionTypes';

export const initialState = {
	count: 0,
	history: [0]
};

function counterReducer(state = initialState, { type, payload }) {
	switch (type) {
	case types.INCREMENT: {
		if (state.count === 10) return state;
		const nextCount = state.count + 1;
		return {
			count: nextCount,
			history: [...state.history, nextCount]
		};
	}

	case types.DECREMENT: {
		if (state.count === 0) return state;
		const nextCount = state.count - 1;
		return {
			count: nextCount,
			history: [...state.history, nextCount]
		};
	}

	default:
		return state;
	}
}
export default counterReducer;
