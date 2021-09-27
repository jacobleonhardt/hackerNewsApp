import React, { useState } from 'react';
import './Articles.css'

const Article = ({ id }) => {
      const [article, setArticle] = useState({})

      const getArticle = async () => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        if(!res.ok) {
          throw new Error(res.status)
        }

        const data = await res.json()
        await setArticle(data)
        return data
      }

      getArticle()

    return (
        <div className="article-card">
            <h2>{article.title}</h2>
            <h3>by: {article.by}</h3>
        </div>
    )
}

export default Article
