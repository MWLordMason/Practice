import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  
  return (
    <div className="App">
      {featPupId && <p>{ featPupId }</p>}
      {puppies.map((puppy) => {
        let handleClick = ()=>{
          setFeatPupId(puppy.id)
        }
        const featuredPup = puppies.find((pup)=> pup.id === featPupId)
        console.log(featuredPup)
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App

