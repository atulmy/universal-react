import React from 'react'
import { Link } from 'react-router-dom'

const QuotesList = (props) => (
    <div>
        <h2>Quotes List</h2>

        <ul>
            {
                props.quotes.map((quote) => (
                    <li key={ quote.id }>
                        <Link to={ `/quote/${ quote.id }` }>{ quote.text }</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default QuotesList