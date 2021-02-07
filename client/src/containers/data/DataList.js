    import React, { Component } from 'react';
    import DataItem from './DataItem';

    export default class DataList extends Component {

        render() {

            const dataNode = this.props.data.map((item, index) =>
                <DataItem
                    key={index}
                    _id={item._id}
                    id={item.id}
                    no={index + 1}
                    letter={item.letter}
                    frequency={item.frequency}
                    searchLetter={item.searchLetter}
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

