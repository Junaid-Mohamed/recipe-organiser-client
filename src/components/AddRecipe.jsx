import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

const AddRecipe = () => {

    const [name,setName] = useState("");
    const [cusine,setCusine] = useState("");
    const [image,setImage] = useState("");
    const [ingredients,setIngredients] = useState("");
    const [instructions,setInstructions] = useState("");

    const clearInput = () => {
        setCusine("");
        setName("");
        setImage("");
        setIngredients("");
        setInstructions("");
    }

    const handleAddRecipe = async () => {
        // console.log(name,cusine,image,ingredients,instructions);
        try{
            const instructionSteps = instructions.split("\n");
            const ingredientsContent = ingredients.split("\n");
            console.log("instructions", instructionSteps);
            const addRecipeResp = await axios.post(`http://localhost:3000/recipe`,{
                name,
                cusine,
                image,
                ingredients:ingredientsContent,
                instructions:instructionSteps
            })
            console.log(addRecipeResp);
            clearInput();
            alert(addRecipeResp.data.message);
            

        }catch(error){
            console.log("Error adding a recipe",error);
            alert("error adding a recipe.")
        }
       
    }
    return(
        <>
        <Navbar/>
        <div className="container my-4">
            <h1>Add Recipe</h1>
            <label>Name:</label><br />
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  /> <br /><br />
            <label>Cusine Type:</label><br />
            <input type="text" value={cusine} onChange={(e)=> setCusine(e.target.value)} /> <br /><br />
            <label>Image Link:</label><br />
            <input type="text" value={image} onChange={(e)=> setImage(e.target.value)} /> <br /><br />
            <label>Ingredients:</label><br />
            <textarea rows={3} value={ingredients} cols={25} placeholder="enter one ingredients per line" onChange={(e)=> setIngredients(e.target.value)} ></textarea><br /><br />
            <label>Instructions:</label><br />
            <textarea rows={3}  value={instructions} cols={25} placeholder="enter one instruction per line" onChange={(e)=> setInstructions(e.target.value)} ></textarea><br /><br />
            <button className="btn btn-primary" onClick={handleAddRecipe} >Submit</button>
        </div>
        </>
    )
}

export default AddRecipe;