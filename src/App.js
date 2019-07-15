import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            SearchField: ''
        }
    }

onSearchChange = (event) => {
    this.setState({SearchField: event.target.value})
    
}

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase()) })

        return (
            <div>
                <h1 className='tc underline'>Robofriends</h1>
                <SearchBox SearchChange = {this.onSearchChange}/>
                < CardList robots={filterRobots} />
            </div>
        )
    
    } 
}

export default App;