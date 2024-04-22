import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9092/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        
        if (data.success) {
          
          window.location.href = '/dashboard'; 
        } else {
         
          setError('Wrong credentials');
        }
      } else {
        setError(data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (

    <div class="loginContainer">

    <form onSubmit={handleSubmit} className='formConatiner'>
        <h2 >LOGIN</h2>

           <label >Username</label>
            
               <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> 
           <label  >Password</label>
            
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
             {error && <p className="error">{error}</p>}
       
        <div className='buttons'
        >
          <button type="submit">SUBMIT</button>
        </div>
        <p>
         <Link to={'/register'} className='register'>
         REGISTER HERE !
         </Link>
          
          </p>
    </form>
</div>



  );
};

export default Login;

