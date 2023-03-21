import { createSlice } from '@reduxjs/toolkit';
import { reduceCategoryValue } from '../reducers/categoryValueReducer'
import { reduceSearchQuery } from '../reducers/searchQueryReducer';
import { reduceSortOptionValue } from '../reducers/sortOptionValueReducer';
import { reduceSelectedBook } from '../reducers/selecedBookReducer';
import { reduceIsLoading } from '../reducers/isLoadingReducer';
import { reduceBookCards } from '../reducers/bookCardsReducer';
import { reduceBookQuantity } from '../reducers/bookQuantityReducer';
import { reduceResidualBookQuantity } from '../reducers/residualBookQuantityReducer';

export const initialState = {
    bookCards: [],
    bookQuantity: 0,
    selectedBook: null,
    paginationOptions: {
        startIndex: 0,
        maxResults: 30,
        residualBookQuantity: 0,
    },
    searchQuery: 'javascript',
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
        setResidualBookQuantity: reduceResidualBookQuantity
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
    setResidualBookQuantity
} = booksSlice.actions;

export default booksSlice.reducer;