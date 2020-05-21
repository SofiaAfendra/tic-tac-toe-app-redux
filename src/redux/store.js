import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from "redux-observable"
import reducer from './reducers/squaresReducer'
import { epicLockSymbol } from "./epic"

const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
    reducer,
    middleware: [epicMiddleware]
})

epicMiddleware.run(epicLockSymbol)