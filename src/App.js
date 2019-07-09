import React, { Component } from 'react';
import './App.css';
import Table from './table';
import TableProps from './propsTable';
import TableState from './stateTable'
import Form from './submitForm'
import Api from './API'

class App extends Component {


  state = {
    listState: [
      // {
      //   name: '3Charlie',
      //   job: '3Janitor',
      // },
      // {
      //   name: '3Mac',
      //   job: '3Bouncer',
      // },
      // {
      //   name: '3Dee',
      //   job: '3Aspring actress',
      // },
      // {
      //   name: '3Dennis',
      //   job: '3Bartender',
      // },
    ],
  };

  

removeCharacter = index =>{
  const stateCharacters = this.state.listState
  this.setState({ 
    listState : stateCharacters.filter((character, i)=>{
      return i !== index
    }),
  })
}

handleSubmitOnApp = character =>{
  this.setState({
    listState : [...this.state.listState, character]
  })
}
  render() {
    const stateCharacters  = this.state.listState
    const appListData = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
    ]
    return (
      <div className="container">
        <TableProps appList={appListData} />
        <br />
        <br />
        
        <Table />
        <br />
        <br />

        <TableState appList={stateCharacters} removeCharacterFromApp = {this.removeCharacter}/>
        <br />
        <br />

        <Form handleSubmit = {this.handleSubmitOnApp}/>
        <br />
        <br />
         
        <Api />
      </div>

    );
  }
}

export default App;
