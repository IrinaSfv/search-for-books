import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksSlice from '../slices/booksSlice';

const rootReducer = {
  books: booksSlice,
};

const reducer = combineReducers(rootReducer);

export default configureStore({
    reducer: reducer,
})