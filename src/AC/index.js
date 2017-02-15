import {INCREMENT, DELETE_ARTICLE, DATE_FILTER, SELECT_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function dateFilter(dayFrom, dayTo) {
	return {
	    type: DATE_FILTER,
	    payload: { from: dayFrom, to: dayTo }
	}
}

export function selectFilter(value) {
    return {
        type: SELECT_FILTER,
        payload: { value }
    }
}