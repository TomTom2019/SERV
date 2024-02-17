import { useEffect } from "react";
import axios from 'axios';

const App = () => {

  useEffect(()=>{
    axios.get('/api/users')
    .then(response => {
      console.log(response.data)
    })
  },[]);



  return(
    <>
      <h1>App</h1>
    </>
  )
}

export default App;