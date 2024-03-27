import React, {useEffect, useState} from 'react';

import Images from './components/images';
//css 
import './App.css'

function App() {

  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(res => res.json()).then(data => {
      setImages(data)
    })
  }, []);

  return (
    <div>
      <Images data={images} />
    </div>
  )
}

export default App
