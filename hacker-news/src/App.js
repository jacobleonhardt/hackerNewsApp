import React, { useState } from 'react';
import './App.css';
import Article from './componants/Articles/index'

function App() {

  const [list, setList] = useState([])

  const getNews = async () => {
    const arr = []
    const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    if(!res.ok) {
      throw new Error(res.status)
    }

    const data = await res.json()
    for(let i = 0; i < 10; i++) {
      arr.push(data[i])
    }
    await setList(arr)
    return arr
  }

  getNews()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker News</h1>
        <h2>Newest</h2>
         {list.length > 0 ? list.map(id => {
           return <Article key={id} id={id} />
         }) : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
