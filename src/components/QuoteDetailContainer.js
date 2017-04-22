import React, { Component } from 'react'

import QuoteDetail from './QuoteDetail'
import quotes from '../data/quotes'

class QuotesDetailContainer extends Component {
    constructor() {
        super();

        this.state = {
            quote: {}
        }
    }

    componentWillMount() {
        // `quotes` should be ideally fetched from an AJAX API using `fetch` or `axios`
        quotes.forEach((quote) => {
            if(quote.id == this.props.match.params.id) {
                this.setState({ quote });
            }
        })
    }

    render() {
        return <QuoteDetail quote={ this.state.quote } />;
    }
}

export default QuotesDetailContainer