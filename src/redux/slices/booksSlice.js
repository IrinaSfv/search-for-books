import { createSlice } from '@reduxjs/toolkit';
import { setCategoryValue } from '../reducers/categoryValue';
import { initialsearchQuery, searchQueryReducer } from '../reducers/searchQuery';
import { setSortOptionValue } from '../reducers/sortOptionValue';
import { setselectedBookReducer } from '../reducers/selecedBook';

export const initialState = {
    bookCards: [],
    selectedBook: {},
    pagination: {
        startIndex: 0,
        maxResults: 30,
    },
    searchQuery: initialsearchQuery.searchQuery,
    categoryValue: '',
    sortOptionValue: 'relevance',
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSearch: searchQueryReducer,
        setCategory: setCategoryValue,
        setSortOption: setSortOptionValue,
        setBook: setselectedBookReducer
    },
});

export const {
    setSearch,
    setCategory,
    setSortOption,
    setBook,
} = booksSlice.actions;

export default booksSlice.reducer;