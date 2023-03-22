import { createSlice } from '@reduxjs/toolkit';
import { reduceCategoryValue } from '../reducers/categoryValueReducer'
import { reduceSearchQuery } from '../reducers/searchQueryReducer';
import { reduceSortOptionValue } from '../reducers/sortOptionValueReducer';
import { reduceSelectedBook } from '../reducers/selectedBookReducer';
import { reduceIsLoading } from '../reducers/isLoadingReducer';
import { reduceBookCards } from '../reducers/bookCardsReducer';
import { reduceBookQuantity } from '../reducers/bookQuantityReducer';
import { reduceResidualBookQuantity } from '../reducers/residualBookQuantityReducer';
import { reduceStartIndex } from '../reducers/startIndexReducer';

export const initialState = {
    bookCards: [],
    bookQuantity: 0,
    selectedBook: null,
    paginationOptions: {
        startIndex: 0,
        maxResults: 30,
        residualBookQuantity: 0,
    },
    searchQuery: 'react',
    categoryValue: '',
    sortOptionValue: 'relevance',
    isLoading: false,
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSearchQuery: reduceSearchQuery,
        setCategoryValue: reduceCategoryValue,
        setSortOptionValue: reduceSortOptionValue,
        setSelectedBook: reduceSelectedBook,
        setIsLoading: reduceIsLoading, 
        setBookCards: reduceBookCards,
        setBookQuantity: reduceBookQuantity,
        setResidualBookQuantity: reduceResidualBookQuantity,
        setStartIndex: reduceStartIndex
    },
});

export const {
    setSearchQuery,
    setCategoryValue,
    setSortOptionValue,
    setSelectedBook,
    setIsLoading,
    setBookCards,
    setBookQuantity,
    setResidualBookQuantity,
    setStartIndex
} = booksSlice.actions;

export default booksSlice.reducer;