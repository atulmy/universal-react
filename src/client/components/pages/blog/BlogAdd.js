import React from 'react'
import { Helmet } from "react-helmet";

const BlogAdd = () => (
    <div>
        <Helmet>
            <title>Blog Add</title>
        </Helmet>

        <h1>Blog Add</h1>

        <form>
            <p><input type="text" placeholder="Title" /></p>

            <p>
                <textarea placeholder="Body"></textarea>
            </p>

            <p>
                <button type="button">Submit</button>
            </p>
        </form>
    </div>
)

export default BlogAdd