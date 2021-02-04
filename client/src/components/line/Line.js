import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineBox from '../../containers/line/LineBox';

import { loadDatadate } from '../../actions/dataDates'

class Line extends Component {
    componentDidMount() {
        this.props.loadDatadate();
    }
    render() {
        const letter = this.props.data.map(item => item.letter)
        const frequency = this.props.data.map(item => item.frequency)
        return (
            <LineBox labels={letter} data={frequency} />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.dataDates
})

const mapDispatchToProps = (dispatch) => ({
    loadDatadate: () => dispatch(loadDatadate())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Line)