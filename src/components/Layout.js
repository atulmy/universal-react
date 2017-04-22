import React from 'react'
import { Link } from 'react-router-dom'

const Layout = (props) => (
    <div>
        <header>
            <Link to="/">Home</Link>
        </header>

        <section>
            { props.children }
        </section>

        <footer>
            &copy; 2017
        </footer>
    </div>
)

export default Layout