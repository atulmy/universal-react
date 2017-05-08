// Imports
import axios from 'axios'

export const ACTION_TYPE_BLOGS_FETCH = 'ACTION_TYPE_BLOGS_FETCH'
export const ACTION_TYPE_BLOGS_FETCHING = 'ACTION_TYPE_BLOGS_FETCHING'
export const ACTION_TYPE_BLOG_FETCH = 'ACTION_TYPE_BLOG_FETCH'
export const ACTION_TYPE_BLOG_FETCHING = 'ACTION_TYPE_BLOG_FETCHING'

export function actionBlogsFetch() {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPE_BLOGS_FETCHING
        })

        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if(response.status === 200) {
                    dispatch({
                        type: ACTION_TYPE_BLOGS_FETCH,
                        blogs: response.data
                    })
                } else {
                    console.error(response);
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export function actionBlogFetch({ id }) {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPE_BLOGS_FETCHING
        })

        return axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }`)
            .then((response) => {
                if(response.status === 200) {
                    dispatch({
                        type: ACTION_TYPE_BLOG_FETCH,
                        blog: response.data
                    })
                } else {
                    console.error(response);
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}