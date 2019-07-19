import React, { Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            SearchField: ''
        }
    }

onSearchChange = (event) => {
    this.setState({SearchField: event.target.value})
    
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))
}

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase()) })
        

        if(this.state.robots.length === 0)
        return <h1 className='dib tc'>Loading....</h1>
        else 
        return (
            <div>
                <h1 className='tc underline f1'>Robofriends</h1>
                <SearchBox SearchChange = {this.onSearchChange}/>
                < CardList robots={filterRobots} />
            </div>
        )
    
    } 
}

export default App;