const initialState = {
    searchQuery: 'java',
};

export function searchQueryReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_QUERY':
            return { ...state, searchQuery: action.payload };

        default:
            return state;
    }
}