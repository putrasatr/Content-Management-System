import React, { Component } from 'react';
import DatadateItem from './DatadateItem';


export default class DatadateList extends Component {


    render() {


        const dataNode = this.props.data.map((item, index) =>
            <DatadateItem
                key={index}
                _id={item._id}
                no={index + 1}
                letter={item.letter}
                frequency={item.frequency}
                sent={item.sent}
            />
        )
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Letter</th>
                        <th scope="col">Frequency</th>
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

