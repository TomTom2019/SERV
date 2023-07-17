import { useEffect,useState } from 'react'
import axios from 'axios';


/// GET DATA
const App = () => {
  let [cars,setCars] = useState([])


useEffect(()=>{
    axios.get('/api/getcars')
    .then(response =>{
      setCars(response.data)
    })

},[])





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
         <hr/>
         {cars.map((car)=>(
           <div key={car._id}>
             {car.brand}
           </div>
         ))


         }
    </div>
  )
}

export default App;