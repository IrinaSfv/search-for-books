// export const setSelectedBook = (state, { payload }) => {
//     state.selectedBook = payload;
// };

export function setselectedBookReducer(book) {
    return {
      type: 'SET_BOOK',
      payload: book,
    };
}