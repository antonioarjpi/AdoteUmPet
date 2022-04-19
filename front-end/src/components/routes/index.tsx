import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home";
import AddPet from "../../pages/AddPet";
import Form from "../../pages/Form";
import Adopted from "../../pages/Adopted";

export const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/cadastrarpet" element={<AddPet />} />  
            <Route path="/form/:petId" element={<Form/>} /> 
            <Route path="/adotados" element={<Adopted />} />  

            
        </Routes>
    )
}

export default Router;