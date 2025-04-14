import axios from 'axios'
import { useEffect, useState } from 'react'
import "../styles.css"

const Meals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => setMeals(res.data.meals))
        .catch(err => console.log(err))
    }, [])

    const mealList = meals.map(({strMeal, strMealThumb, idMeal}) =>{
        return(
            <section className="card">
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })

  return (
    <div className="items-container">
        {mealList}
    </div>
  )
}

export default Meals