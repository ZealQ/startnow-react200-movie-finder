import { connect } from "react-redux";
import MovieDetailContainer from "./movieDetailContainer"

function mapStateToProps(state) {
    return {
        mData: state.movieSearch.mData
    };
}
export default connect(mapStateToProps)(MovieDetailContainer)
