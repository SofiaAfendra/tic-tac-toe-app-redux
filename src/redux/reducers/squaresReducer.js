import { calculateWinner } from '../../constants'

const initialState = {
    squares: Array(9).fill(null),
    xIsNext: false
}

export default (state = initialState, { payload }) => {
    const { squares, xIsNext } = state
    if (calculateWinner(squares) || squares[payload]) {
        return state
    }
    const newSquares = squares.slice()
    newSquares[payload] = xIsNext ? 'X' : 'O'
    return {
        ...state,
        squares: newSquares,
        xIsNext: !xIsNext
    }
}