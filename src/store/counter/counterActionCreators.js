import * as types from './CounterActionTypes';

/*
 * action creators
 */

export const incrementCounter = () => ({
	type: types.INCREMENT
});

export const decrementCounter = () => ({
	type: types.DECREMENT
});
