import React from 'react';
import { connect } from 'react-redux'
import { Square } from './Square'
import { calculateWinner } from '../constants'
import { fillSquare } from '../redux/actions';

const Board = ({ squares, xIsNext, fillSquare }) => {

    function renderSquare(index) {
        return (
            <Square
                value={squares[index]}
                onClick={() => fillSquare(index)}
            />
        );
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

const mapStateToProps = ({ squares, xIsNext }) => ({
    squares,
    xIsNext
})

export default connect(mapStateToProps, { fillSquare })(Board)