import "./new.scss"
import Navbar from"../../components/navbar/Navbar"
import Sidebar from"../../components/sidebar/Sidebar"
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { useState } from "react";

const New=({inputs,title,addNewUsers}) =>{

    const[file,setFile]=useState("");
    // const [newData, setNewData] = useState({
    //     name:"",
    //     phone:"",
    //     address:"",
    //     userName:"",
    //     email:"",
    //     password:"",
    //     country:""
    // })

    const handleSave = (e) =>{
        e.preventDefault();
        // console.log(e.target.email.value);
        let userFormData = {
            name:e.target.name.value,
            phone:e.target.phone.value,
            address:e.target.address.value,
            userName:e.target.username.value,
            email:e.target.email.value,
            password:e.target.password.value,
            country:e.target.country.value
        }

        addNewUsers(userFormData)
       
    }
    return(
        <div className="new" >
           <Sidebar/>
           <div className="newContainer">
            <Navbar/>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={file
                    ?URL.createObjectURL(file):"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                     alt="" 
                     />
                </div>
                <div className="right">
                <form onSubmit={handleSave}>
                    <div className="formInput">
                        <label htmlFor="file">
                        Image:<UploadFileOutlinedIcon className="icon"/>
                        </label>
                        <input 
                        type="file" id="file"onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}  />
                    </div>
                    
                    {inputs.map((input)=>(
                    <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <input type={input.type} placeholder={input.placeholder} name={input.name}/>
                    </div>
                     
                    //  <input type={input.type} placeholder={input.placeholder} name={input.name}/>
                    //  <label className="formInput" key={input.id}>{input.label}
                    //  </label>
                    ))}
                    
                    <button type='submit'>send</button>
                </form>
                </div>
            </div>

           </div>
        </div>
    );
};
export default New;