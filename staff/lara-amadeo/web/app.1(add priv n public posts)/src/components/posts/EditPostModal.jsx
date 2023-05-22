import { context, errorToast, generateToast, successToast } from "../../ui"
import updatePost from "../../logic/updatePost"
import retrievePost from "../../logic/retrievePost"
import { useState } from "../react"

export default function EditPostModal({ postId, onCancelEditPost, onConfirmEditPost }){

    const [post, setPost] = useState()

    try{
        retrievePost(context.userId, postId, (error, post) => {
            if(error){
                generateToast({
                    message: error.message + error.stack,
                    type: errorToast
                })
                return
            }
            setPost(post)
        })
    } catch(error){
        generateToast({
            message: error.message + error.stack,
            type: errorToast
        })
    }
    
    function onCancel(event){
        event.preventDefault()
        onCancelEditPost()
    }

    function handleConfirmationEditPost(event){
        event.preventDefault()
        const postImgSrc = event.target.image.value 
        const postCaption = event.target.caption.value


        try{
            updatePost(context.userId ,postId, postImgSrc, postCaption, (error) => {
                if(error){
                    generateToast({
                        message: error.message + error.stack,
                        type: errorToast
                    }) 
                }
                
                generateToast({
                    message: 'Post updated!',
                    type: successToast
                })
                onConfirmEditPost()
            })
        } catch(error){
            generateToast({
                message: error.message,
                type: errorToast
            })
        }
    }

        return <div className="modal-overlay">
        <div className="centered-containers">
            <form className="centered-form" onSubmit={handleConfirmationEditPost}>
                
                <p className="title">Edit post</p>

                {post && <>
                <input className="text-field" type="hidden" name="postId" defaultValue={post.id}/>
                <input className="text-field" type="text" name="image" defaultValue={post.image}/>

                <label htmlFor="caption" className="text-field-label">Post caption</label>
                <textarea className="text-area" name="caption" defaultValue={post.text}></textarea>
                </>}

                {/* <div className="edit-post-image-preview-container">
                <img src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=" alt="" className="edit-post-image-preview"/>
                </div> */}

                <div className="button-bar">
                    <button className="button-S secondary-button" id="cancel-edit-post" type="button" onClick={onCancel}>Cancel</button>
                    <button className="button-S primary-button" id="save-edit-post" type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
}