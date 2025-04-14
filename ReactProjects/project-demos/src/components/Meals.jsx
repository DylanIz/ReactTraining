import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles.css'

const Meals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => setMeals(res.data.meals))
        .catch(err => console.log(err))
    }, [])

    console.log(meals)

  return (
    <div>Meals</div>
  )
}

export default Meals