import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: '',
            filteredRobots: robots
        }
    }

    onSearchChange = (event) => {
        // warning!"this" refers to the object that raises the event
        // when used in this method, unless the method is created 
        // with arrow functions
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList cards={filteredRobots}/>
            </div>
        );
    }
}

export default App;