import React from 'react'

const QuoteDetail = (props) => (
    <div>
        <h2>Quote Detail #{ props.quote.id }</h2>

        <p>{ props.quote.text }</p>

        <p>{ props.quote.author }</p>
    </div>
)

export default QuoteDetail