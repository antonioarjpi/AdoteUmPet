import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home";
import AddPet from "../../pages/AddPet";
import Form from "../../pages/Form";

export const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/cadastrarpet" element={<AddPet />} />  
            <Route path="/form/:petId" element={<Form/>} />            
        </Routes>
    )
}

export default Router;