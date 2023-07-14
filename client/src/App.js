import { useEffect } from 'react'
import axios from 'axios';



// onCarSubmit => const carSchema
const App = () => {

const onCarSubmit = () =>{
   axios.post('/api/addcar',{
     brand:'Hunday',
    model:'800',
    year:2000,
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
        db
      </button>

    </div>
  )
}

export default App;