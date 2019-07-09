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
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
}

class TableProps extends Component {
    render() {
        const tableData = this.props.appList

        return (
            <div>
                <h1>Example 1</h1>
                <table>

                    <TableHeader />
                    <TableBody bodyData={tableData} />
                </table>
            </div>
        )
    }
}

export default TableProps;