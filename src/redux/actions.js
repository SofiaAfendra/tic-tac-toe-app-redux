import { FILL_SQUARE, LOCK_SQUARE, BLOCK_ACTION } from './actionTypes'

export const fillSquare = index => ({
    type: FILL_SQUARE,
    payload: index
})

export const lockSquare = squaresArray => ({
    type: LOCK_SQUARE,
    payload: squaresArray
})

export const blockAction = () => ({
    type: BLOCK_ACTION
})