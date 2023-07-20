import { useEffect,useState } from 'react'
import axios from 'axios';


/// GET DATA another way
const App = () => {
  let [cars,setCars] = useState([])

  useEffect(()=>{
    getCars();
  },[])

// get data another way
  const getCars = () =>{
    axios.get('/api/getcars')
    .then( response =>{
      setCars(response.data)
    })
  }


const onCarSubmit = () =>{
   axios.post('/api/addcar',{
    brand:'juaguar',
    model:'tera',
    year:2010,
    avail:true
   })
   .then(response =>{
    console.log(response.data)
   })
}


// REMOVE
const onCarRemove = () =>{
    axios.post('/api/removecar',{
      brand:'juaguar'
    })
    .then( response =>{
      console.log(response.data)
      getCars();
    })
  }

//  update
const onCarUpdate = () => {
    axios.post('/api/updatecar',{
      id:'64b693f99990e5c7f19c1300',
      brand:'mercexxxx'
    })
    .then( response => {
      console.log(response.data)
      getCars();
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

 <hr/>
      <h2>Remove element/s</h2>
      <button onClick={()=> onCarRemove()}>Delete it</button>
  <hr/>
        <h2>Update element</h2>
        <button onClick={()=> onCarUpdate()}>Update </button>


    </div>
  )
}

export default App;