import {combineReducers} from 'redux'
import counterReducer from './counter'
import dateFilter from './dateFilter'
import selectFilter from './selectFilter'
import articles from './articles'

export default combineReducers({
    count: counterReducer,
    articles,
   	dateRange: dateFilter,
   	value: selectFilter
})