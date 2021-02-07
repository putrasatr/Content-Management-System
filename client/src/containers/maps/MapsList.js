import React, { Component } from 'react';
import MapsItem from './MapsItem';

export default class MapsList extends Component {

    render() {
        const dataNode =this.props.data.map((item, index) =>
            <MapsItem
                key={index}
                _id={item._id}
                id={item.id}
                no={index+1}
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



