import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import { db } from '../firebaseConfig'
import '../component/Articles.css'

const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=> {
        const articleRef = collection(db, 'Artices');
        const q = query(articleRef, orderBy('createdAt', 'desc'))
        onSnapshot(q, (snapshot)=> {
            // console.log(snapshot)
            const articles = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles)
            console.log(articles)
        })
    }, [])



    return (
        <div className='hh'>
            {articles.map(article=> {
                <h2>{article.description}</h2>
            })} 
        </div>
    )
}

export default Articles