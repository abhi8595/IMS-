import '../QR/QR.css';
import { Navigate } from 'react-router-dom';
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = ()=>{
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        qty: ''
      });
      const [isQrCodeGenerated, setQrcodeGenerated] = useState(false);
       
      const handleSubmit = async (event) => {
        event.preventDefault();
        axios({
            method: 'PUT',
            url: `http://localhost:9092/edit/${id}`,
            data: formData
          });
          setQrcodeGenerated(true);
      };
      if (isQrCodeGenerated) {
        return <Navigate to="/dashboard" replace={true} />
      }

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };


return(
    


<div className='qrmainContainer' >
<form className='formConatiner' onSubmit={handleSubmit}>
<h2 className='editHead'>Edit</h2>
  <label>Name</label>
  <select name="name" value={formData.name} onChange={handleChange}>
    <option>Select(C1-C5)</option>
    <option value={"C1"}>C1</option>
    <option value={"C2"}>C2</option>
    <option value={"C3"}>C3</option>
    <option value={"C4"}>C4</option>
    <option value={"C5"}>C5</option>
  </select>
  <label>Date</label>
  <input type="date" name="date" value={formData.date} onChange={handleChange}/>
  <label>Quantity</label>
  <input type="text" name="qty" value={formData.qty} onChange={handleChange}/><br/>
  <button>Generate QR</button>
</form>
</div>
)
}

export default Edit;