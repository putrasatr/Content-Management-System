import React, { Component } from 'react';
import MapsItem from './MapsItem';
import { connect } from 'react-redux';
import { loadMaps } from '../../actions/maps';

class MapsList extends Component {

    componentDidMount() {
        this.props.loadMaps();
    }

    render() {
        let dataFiltered = this.props.data;
        if (this.props.searchTitle) {
            dataFiltered = this.props.data.filter(item =>
                item.title.toLowerCase().includes(this.props.searchTitle.toLowerCase())
            )
        }

        const dataNode = dataFiltered.map((item, index) =>
            <MapsItem
                key={index}
                id={item._id}
                no={index + 1}
                title={item.title}
                lat={item.lat}
                lang={item.lang}
                sent={item.sent}
            />
        )
        
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Longitude</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataNode}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.maps
})

const mapDispatchToProps = (dispatch) => ({
    loadMaps: () => dispatch(loadMaps())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapsList)