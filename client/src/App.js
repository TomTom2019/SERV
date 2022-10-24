import { useEffect } from 'react'
import axios from 'axios';

const App = () => {


  const onCarSubmit = () => {
    axios.post('/api/addcar',{
      brand: 'Porche',
      model: '911',
      year: 2022,
      avail: true
    })
    .then(response =>{
      console.log(response.data)
    })
  }



  return(
    <div className='app'>
      <h1>Add car</h1>
      <button
        onClick={()=> onCarSubmit()}
      >
        Add car to DB
      </button>

    </div>
  )
}

export default App;