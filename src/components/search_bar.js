import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { input: '' };
    }

    render() {
        return ( 
            <div>
                <input onChange={event => this.setState({ input: event.target.value })}/>
                Value of input: {this.state.input}
            </div>
        );
        }
}

export default SearchBar;