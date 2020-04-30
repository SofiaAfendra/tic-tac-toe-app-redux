import React from 'react';
import { connect } from 'react-redux'
import { Square } from './Square'
import { calculateWinner } from '../constants'
import { fillSquare } from '../redux/actions';

class Board extends React.Component {

    renderSquare(index) {
        return (
            <Square
                value={this.props.squares[index]}
                onClick={() => this.props.fillSquare(index)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.props.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    squares: state.squares,
    xIsNext: state.xIsNext
})

export default connect(mapStateToProps, { fillSquare })(Board)


