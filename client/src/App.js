import { useEffect } from 'react'
import axios from 'axios';



// onCarSubmit => const carSchema
const App = () => {

const onCarSubmit = () =>{
   axios.post('/api/addcar',{
    brand:'mercedez',
    model:'terra',
    year:2010,
    avail:true
   })
   .then(response =>{
    console.log(response.data)
   })
}



  return(
    <div className='app'>
      <h1>add car</h1>
      <button
        onClick={()=> onCarSubmit()}
      >
        add car to db
      </button>

    </div>
  )
}

export default App;