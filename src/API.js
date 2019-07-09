import React, { Component } from 'react';

class Api extends Component{
    state = {
        dataList: [],
    }

    componentDidMount(){
        const url='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
        .then(result => result.json())
        .then(result =>{
            this.setState({
                dataList:result,
            })
        })
    }

    render(){
        const data = this.state.dataList

        const result = data.map((entry, index) =>{
            return <li key={index}>{entry}</li>
        })
        return <ul>{result}</ul>
    }

}

export default Api