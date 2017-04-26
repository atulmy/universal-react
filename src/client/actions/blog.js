import axios from 'axios'

export const ACTION_TYPE_BLOG_FETCH = 'ACTION_TYPE_BLOG_FETCH'

export function actionBlogFetch() {
    console.log('actionBlogFetch')

    return (dispatch) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if(response.status === 200) {
                    dispatch({
                        type: ACTION_TYPE_BLOG_FETCH,
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