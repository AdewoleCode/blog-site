import { deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { collection } from 'firebase/firestore'
import { auth, db } from '../Firebase-config'
import '../App.css';
import { GoTrashcan } from 'react-icons/go'


const Home = (isAuth) => {


  const [postLists, setPostLists] = useState([])
  const postCollectionRef = collection(db, 'posts')


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostLists(data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })
      ))
    }


    getPosts()
    localStorage.clear();

  }, [])

  // console.log(postLists)

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }

  // console.log(auth.currentUser.uid)

  console.log(isAuth)


  return (

    <div className='homePage'>
      {postLists.map(post => {
        return (
          <div key={post.id} className='post'>
            <div className='postHeader'>

              <div className='title'>
                <h1> {post.title} </h1>
              </div>

              {/* <div className='deletePost'>{isAuth && post.author.id === auth.currentUser.uid && (
                <GoTrashcan className='icon' onClick={() => {
                  deletePost(post.id)
                }} />
              )} </div> */}

              {isAuth && post.author.id === auth.currentUser.uid && (

                <div className='deletePost'>
                  <button
                    onClick={() => {
                      deletePost(post.id)
                    }}>
                    delete
                  </button>
                </div>
              )
              }



            </div>
            <div className='postTextContainer'>{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        )


      })}

    </div>
  )
}

export default Home;