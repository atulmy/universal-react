import React, { Component } from 'react'

import QuotesList from './QuotesList'
import quotes from '../data/quotes'

class QuotesListContainer extends Component {
    constructor() {
        super();

        this.state = {
            quotes: []
        }
    }

    componentDidMount() {
        // `quotes` should be ideally fetched from an AJAX API using `fetch` or `axios`
        this.setState({ quotes });
    }

    render() {
        return <QuotesList quotes={ this.state.quotes } />
    }
}

export default QuotesListContainer