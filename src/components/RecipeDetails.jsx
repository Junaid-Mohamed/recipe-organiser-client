import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const RecipeDetails = () => {

    const {recipeId} = useParams();
    const [recipe,setRecipe] = useState({});

    useEffect(()=>{
        const fetchRecipe = async () =>{
            try{
                const resp = await axios.get(`https://recipe-organiser-delta.vercel.app/recipe/${recipeId}`)
                console.log(resp);
                setRecipe(resp.data);
            }catch(error){
                console.log("Error fetching recipe details.",error)
            }
        }
        fetchRecipe();
    },[recipeId])

    return(
        <>
        <Navbar/>
        <div className="container my-4 " >
            { recipe ? (
                <>
            <h1>{recipe.name}</h1>
            <div className="card  d-flex flex-row gap-2" >
               <img width={300} src={recipe.image} alt={recipe.name} />
               <div className="p-2" > 
                <h2>Cuisine: {recipe.cusine}</h2>
                <h3>Ingredients: </h3>
                <p>{recipe?.ingredients?.join(", ")}</p>
                <h3>Instructions</h3>
                <ol>
                {recipe?.instructions?.map((step,index)=>(
                    <li key={index} >{step}</li>
                ))}
                </ol>
                </div> 
            </div>
            </>):(
                <p>Loading.....</p>
            )}
        </div>
        </>
    )
}

export default RecipeDetails;