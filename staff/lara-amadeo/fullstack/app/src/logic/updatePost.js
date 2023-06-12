import { findUserbyId, loadPosts, savePostInStorage, findPostById } from "../data"

/**
 * 
 * @param {string} postId post's id
 * @param {URL} image post's image
 * @param {string} text post's caption 
 */

export default function updatePost(userId ,postId, image, text, callback) {

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const {status} = xhr
        if(status !== 204){
            const json = xhr.response
            const { error } = JSON.parse(json)

            callback(new Error(error))

            return
        }

        callback(null)
    }

    xhr.onerror = () => {
        callback(new Error('Connection error'))
    }

    xhr.open('PATCH', `http://localhost:4000/posts/${postId}/users/${userId}`)

    xhr.setRequestHeader('Content-type', 'application/json')

    const data = { image, text }
    const json = JSON.stringify(data)

    xhr.send(json)

    
}