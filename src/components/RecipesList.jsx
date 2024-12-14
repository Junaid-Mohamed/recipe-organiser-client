import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipesList = () => {

    const [recipes,setRecipes] = useState([]);
    const [filterRecipe, setFilterRecipe] = useState("");

    useEffect(()=>{
        const fetchRecipesData = async() => {
            try{
                const recipesData = await axios.get("http://localhost:3000/recipes");
                setRecipes(recipesData.data);
            }catch(error){
                console.log("Error fetching recipes data",error)
            }
            
            
        }
        fetchRecipesData();
        
    },[])
    console.log(recipes);

    const handleRecipeDelete = async(recipeId) =>{
        try{
            const resp = await axios.delete(`http://localhost:3000/recipe/${recipeId}`);
            alert(resp.data.message); 
            window.location.reload();
        }catch(error){  
            console.log("Error deleting the recipe",error);
        }
    }

    const filteredRecipes = filterRecipe ? recipes.filter(recipe=>recipe.name.toLowerCase().includes(filterRecipe.toLowerCase())) : recipes;

    return(
        <div className="container">
        <input className="form-control my-4" type="text" name="search-recipe" onChange={(e)=>setFilterRecipe(e.target.value)} value={filterRecipe} placeholder="Search by recipe name..."/>
        <div>
            <h1>All Recipes:</h1>
            <div className="row" >

            
            {filteredRecipes.map(recipe=>(
                <div className="col-md-3" key={recipe._id} >
                <div className="card my-2 ">
                <img className="card-img-top" width={200} height={200} src={recipe.image} alt={recipe.name}/>
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p><strong>Cusine Type: </strong>{recipe.cusine}</p>
                  <p><strong>Ingredients: </strong><Link to={`/recipe-details/${recipe._id}`}>{`See Recipe >`}</Link></p>
                  <p><strong>Instructions: </strong><Link to={`/recipe-details/${recipe._id}`}>{`See Recipe >`}</Link></p>
                  <a onClick={()=>handleRecipeDelete(recipe._id)} className="btn btn-danger">Delete</a>
                </div>
              </div>
              </div>
            ))}
             </div> 
            </div>
        </div>
    )
}

export default RecipesList;