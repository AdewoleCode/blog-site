import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db, auth } from '../Firebase-config'
import { useNavigate } from 'react-router-dom'




const AddPost = () => {

  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')

  const postCollectionRef = collection(db, 'posts')

  let navigate = useNavigate()

  const validateInput = () => {
    if (title.value == '' || postText.value == ''){
      prompt('please add a username or a post')
      return
    }
  }

  const createPost = async () => {
    validateInput()
    await addDoc(postCollectionRef, {
      title: title,
      postText: postText,
      author :{
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })
    navigate('/')
  }





  return (
    <div className='createPost'>
      <div className='crContainer'>
        <h1>Create a post</h1>
        <div className='input'>
          <label>Title:</label>
          <input placeholder='text' onChange={(e) => {
            setTitle(e.target.value)
          }}/>
        </div>

        <div className='input'>
          <label>Post:</label>
          <textarea placeholder='post...' onChange={(e) => {
            setPostText(e.target.value)
          }}/>
        </div>

        <button onClick={createPost}>Submit Post</button>

      </div>
    </div>
  )
}

export default AddPost