import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [user, setUser] = useState()

    const navigate = useNavigate();

  
  
    const API_URL = import.meta.env.VITE_API_URL
  
    const onSignUpBtn = async () => {
      const responce =  await fetch (API_URL + "/users", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify( {
          firstname: firstName,
          lastname: lastName,
        })
      })
  
      console.log(responce);
      const data = await responce.json()
      console.log(data);
  
      setUser(data)

      navigate("/profil"); 


      // POST http://localhost:5000/users
      // Content-Type: application/json
      
      // {
      //   "firstname": "Edward",
      //   "lastname": "T",
      //   "age": 19
      // }
    }
  
    return (
      <div className="App">
        <input type="text" placeholder='First Name..' onChange={(event) => {setFirstName(event.target.value);}} />
        <input type="text" placeholder='Last Name..' onChange={(event) => {setLastName(event.target.value);}}/>
        <button onClick={onSignUpBtn}>Sign up</button>
        <div>
          {user?.firstname}
          {user?.lastname}
        </div>
      </div>
    )
  }