import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
//import {robots} from './robots.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    /*
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }
    */

    componentDidMount() {
        /*
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}));
        //his.setState({robots: robots});
        */
        this.props.onRequestRobots();
    }

    render() {
        //const {robots} = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        //if(robots.length===0) {
        //if(isPending) {
        //    return <h1 className='tc'>Loading...</h1>
        //}
        //else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ? <h1>Loading</h1> :
                        <ErrorBoundary>
                            <CardList cards={filteredRobots} />
                        </ErrorBoundary>
                    }
                </Scroll>
            </div>
        );
        //}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);