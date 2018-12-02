import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}));
        //his.setState({robots: robots});
    }

    onSearchChange = (event) => {
        // warning!"this" refers to the object that raises the event
        // when used in this method, unless the method is created 
        // with arrow functions
        this.setState({searchField: event.target.value});
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        
        if(robots.length===0) {
            return <h1 className='tc'>Loading...</h1>
        }
        
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList cards={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;