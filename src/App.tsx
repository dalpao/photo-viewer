import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './PhotoViewer'
import { ImageSelector } from './ImageSelector'



function App() {
    const [displayUrl, setUrl] = useState('');


  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer name='Mary' url={displayUrl}/>
          <ImageSelector changeImg ={setUrl}/>
      </div>
  );
}


export default App
