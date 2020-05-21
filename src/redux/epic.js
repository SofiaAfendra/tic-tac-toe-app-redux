import { ofType } from "redux-observable"
import { map } from "rxjs/operators"
import { FILL_SQUARE } from "./actionTypes"
import { lockSquare, blockAction } from "./actions"
import { calculateWinner } from '../constants'

export const epicLockSymbol = (action$, state$) =>
    action$.pipe(
        ofType(FILL_SQUARE),
        map(({ payload }) => {
            const { squares, xIsNext } = state$.value
            if (calculateWinner(squares) || squares[payload]) {
                return blockAction()
            }
            const newSquares = squares.slice()
            newSquares[payload] = xIsNext ? 'X' : 'O'
            return lockSquare(newSquares)
        })
    )