import { useState } from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const Register =()=>{
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });

      const [isRegistered, setIsRegistered] = useState(false);
       
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        axios({
            method: 'post',
            url: 'http://localhost:9092/registerUser',
            data: formData
          });
    
          setIsRegistered(true);
      };
      if (isRegistered) {
        return <Navigate to="/signin" replace={true} />
      }
    
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    return(
       <div className="registerContainer">
         
         <form className='formConatiner' onSubmit={handleSubmit}>
         <h2>REGISTER</h2>
         
         <label >NAME :</label>
           <input type="text"  name="name" placeholder='enter name'
          value={formData.name}
          onChange={handleChange} />
          <label >EMAIL :</label>
            <input type="email" name="email" placeholder='enter email'
          value={formData.email}
          onChange={handleChange} />
          <label >PASSWORD :</label>
            <input type="password"  name="password" placeholder='enter password'
          value={formData.password}
          onChange={handleChange}/>
            
           <div className='buttons'>
           <button> REGISTER</button>
           </div>
             <p>Already have an account? <Link to="/signin" className='register'> Login Here</Link></p>
         </form>
       </div>
    )
}

export default Register;