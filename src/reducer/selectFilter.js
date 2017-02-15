import {SELECT_FILTER} from '../constants'

export default (value = null, action) => {

	const {type, payload} = action
	switch (type) {
		case SELECT_FILTER:
			return payload.value
	}

	return value
}