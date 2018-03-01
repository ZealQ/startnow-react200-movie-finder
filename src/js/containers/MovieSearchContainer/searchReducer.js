const defaultState = {
    mData:{},
    
};
export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case "THE_FILMS_FULFILLED": {
            return {
                ...state,
                mData: payload
            };
        }
        default: {
            return state;
        }
    }
}