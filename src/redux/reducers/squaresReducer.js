import { LOCK_SQUARE, BLOCK_ACTION } from "../actionTypes"

const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case BLOCK_ACTION:
            return ({ ...state })

        case LOCK_SQUARE:
            const { xIsNext } = state
            return ({
                ...state,
                squares: payload,
                xIsNext: !xIsNext
            })

        default:
            return state
    }
}