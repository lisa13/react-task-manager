import React, { Component } from 'react';
import './search-panel.css'

export default class SearchPannel extends Component {

    state = {
        term: ''
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearch(term);
    }
    
    render() {
        return (
            <input className="form-control search-input"
                placeholder="search"
                value={this.state.term}
                onChange={this.onSearch}
            />
        );

    }
}

