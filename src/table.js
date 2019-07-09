import React, { Component } from 'react'

const SimpleComponent = () => {
    return <h1>Example 2</h1>
  }

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody =()=>{
    return(
      <tbody>
      <tr>
        <td>2Charlie</td>
        <td>2Janitor</td>
      </tr>
      <tr>
        <td>2Mac</td>
        <td>2Bouncer</td>
      </tr>
      <tr>
        <td>2Dee</td>
        <td>2Aspiring actress</td>
      </tr>
      <tr>
        <td>2Dennis</td>
        <td>2Bartender</td>
      </tr>
    </tbody>
    )
}

class Table extends Component{
    render(){
        return(
            <div>
            <SimpleComponent></SimpleComponent>
            <table>
                <TableHeader />
                <TableBody></TableBody>
            </table>
            </div>
        )
    }
}

export default Table;