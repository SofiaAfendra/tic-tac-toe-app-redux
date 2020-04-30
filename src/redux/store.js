import { configureStore } from '@reduxjs/toolkit'
import squaresReducer from './reducers/squaresReducer'

export const store = configureStore({ reducer: squaresReducer })