import React, {Component} from 'react';

class SearchBox extends Component {
    render () {
        const {searchChange} = this.props;
        return (
            <div className='pa2'>
                <input 
                    className='pa2 ba b--green bg-lightest-blue' 
                    type='search' 
                    placeholder='Search Robots'
                    onChange={searchChange}
                />
            </div>
        );
    }
}

export default SearchBox