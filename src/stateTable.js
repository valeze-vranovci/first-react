import React, { Component } from 'react'


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.bodyData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeInComponent(index)}>Delete</button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
}

class TableState extends Component {
    render() {
        return (
            <div>
                <h1>Example 1</h1>
                <table>
                    <TableHeader />
                    <TableBody bodyData={this.props.appList} removeInComponent={this.props.removeCharacterFromApp} />
                </table>
            </div>
        )
    }
}

export default TableState;