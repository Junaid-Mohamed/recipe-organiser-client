import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import AddRecipe from "./components/AddRecipe.jsx"
import RecipeDetails from "./components/RecipeDetails.jsx"
import './index.css'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/add-recipe',
    element:<AddRecipe/>
  },
  {
    path:'/recipe-details/:recipeId',
    element:<RecipeDetails/>
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
