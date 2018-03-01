import { connect } from "react-redux";
import MovieSearchContainer from "./movieSearchContainer"

function mapStateToProps(state) {
    return {
        mData: state.movieSearch.mData
    };
}
export default connect(mapStateToProps)(MovieSearchContainer)
