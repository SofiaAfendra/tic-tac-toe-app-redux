import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/squaresReducer'

export const store = configureStore({ reducer })