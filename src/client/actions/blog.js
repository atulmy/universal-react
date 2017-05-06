import axios from 'axios'

export const ACTION_TYPE_BLOGS_FETCH = 'ACTION_TYPE_BLOGS_FETCH'
export const ACTION_TYPE_BLOG_FETCH = 'ACTION_TYPE_BLOG_FETCH'

export function actionBlogsFetch() {
    // console.log('actionBlogsFetch')

    return (dispatch) => {
        console.log('https://jsonplaceholder.typicode.com/posts')
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
    // console.log('actionBlogFetch')

    // console.log(id)

    return (dispatch) => {
        console.log(`https://jsonplaceholder.typicode.com/posts/${ id }`)
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