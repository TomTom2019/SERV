import { useEffect } from 'react'
import axios from 'axios';

const App = () => {

  const addUser = () => {
    axios.get('/api/users')
    .then(response =>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  }


  return(
    <div className='app'>
      
      <button
        onClick={()=>addUser()}
      >
        Add user
      </button>

    </div>
  )
}

export default App;