import { useEffect } from 'react'
import axios from 'axios';

const App = () => {

  const User = () => {
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
        onClick={()=>User()}
      >
        user
      </button>

    </div>
  )
}

export default App;