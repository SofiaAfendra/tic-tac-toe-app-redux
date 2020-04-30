import { calculateWinner } from '../../constants'

const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true
}

const squaresReducer = (state = initialState, action) => {
    const { index } = action.payload || {}
    if (index == null) {
        return state
    }
    const { squares, xIsNext } = state
    if (calculateWinner(squares) || squares[index]) {
        return state
    }
    const newSquares = squares.slice()
    newSquares[index] = xIsNext ? 'X' : 'O'
    return {
        ...state,
        squares: newSquares,
        xIsNext: !xIsNext
    }
}

export default squaresReducer