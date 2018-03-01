import { combineReducers } from 'redux';
import searchReducer from "./containers/MovieSearchContainer/searchReducer";

const rootReducer = combineReducers({
    movieSearch: searchReducer
});

export default rootReducer;