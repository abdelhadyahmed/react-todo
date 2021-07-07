import React, { Component } from 'react'
import TodoItems from './component/TodoItems/TodoItems'
import AddItem from './component/AddItem/AddItem'

export default class App extends Component {
  state = {
    items: []
  }

  addItem = (item) =>{
    item.id = Math.random()
    let items = this.state.items
    items.push(item)
    this.setState({
      items: items
    })
    
  }

  deleteItem = (id) => {
    let newItems = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items:newItems})
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center" >Todo App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem} />
      </div>
    )
  }
}
