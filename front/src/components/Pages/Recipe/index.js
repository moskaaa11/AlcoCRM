import classes from './recipe.module.scss'
import Item from '../../../UI/icons'
import { newRecipe } from '../../../store/reducers/NewRecipeReducer/NewRecipeReducer'

import {useForm} from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Recipe = () => {

  // declair values
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    setValue
  } = useForm()
  const [main, setMain] = useState([])
  const [other, setOther] = useState([])
  const [recipe, setRecipe] = useState()
  const dispatch = useDispatch()
  const newRecipes = useSelector(state=>state.newrecipe.recipe)

  // Hooks

  useEffect(()=>{
    if(newRecipes){
      console.log(newRecipes)
    }
  },[newRecipes])

  useEffect(()=>{
    if(recipe !== undefined){
      dispatch(newRecipe({credential: recipe}))
    }
  },[recipe, dispatch])


  // custom functions
  const onSubmit = (data) => {

    const entries = Object.entries(data);

    const main = entries
    .filter(([key, value]) => key.startsWith('mainAdd') && value.trim() !== '')
    .map(([_, value]) => value);

    const other = entries
    .filter(([key, value]) => key.startsWith('otherAdd') && value.trim() !== '')
    .map(([_, value]) => value);

    setRecipe({
      name: data.name,
      mainIngredients: main,
      otherIngredients: other
    })
  }

  const mainList = () =>{
    let mainPoint = watch("mainAdd")
    setMain(prev=>[...prev,mainPoint])
  }

  const otherList = () =>{
    let otherPoint = watch("otherAdd")
    setOther(prev=>[...prev,otherPoint])
  }

  const otherDelete = (element) =>{
    setOther(prev=>prev.filter(item=> item !== element))
    unregister('otherAdd' + element)
  }

  const mainDelete = (element) => {
    setMain(prev=>prev.filter(item=> item !== element))
    unregister('mainAdd' + element)
  }

  return (
    <div className={classes.recipe}>
      <h1 className={classes.recipe__title}>Create your recipe</h1>
      <form className={classes.recipe__form} onSubmit={handleSubmit(onSubmit)} onReset={(e) => {
        e.preventDefault(); 
        setValue('mainAdd', '');
        setValue('otherAdd', '');
      }}>
        <div className={classes.recipe__box}>
          <h2 className={classes.recipe__secondTitle}>Name:</h2>
          <input className={classes.recipe__input} {...register('name')}/>
        </div>
        <div className={classes.recipe__box}>
          <div className={classes.recipe__main}>
            <h2 className={classes.recipe__secondTitle}>Main ingredients:</h2>
            <div className={classes.recipe__container}>
              <input className={classes.recipe__input} {...register('mainAdd')}/>
              <button className={classes.recipe__button} onClick={mainList} type='reset'>
                <Item value="Plus"/>
              </button>
            </div>
            {main.length > 0 &&
              (main.map(el=>(
              <div key={el} className={classes.recipe__container}>
                <input className={classes.recipe__inputAdded} value={el} disabled {...register('mainAdd' + el)}/>
                <button className={classes.recipe__button} type='reset' onClick={() => mainDelete(el)}>
                  <Item value="Delete"/>
                </button>
              </div>
              )))
            }
          </div>
          <div className={classes.recipe__other}>
            <h2 className={classes.recipe__secondTitle}>Ingredients per bottle:</h2>
            <div className={classes.recipe__container}>
              <input  className={classes.recipe__input} {...register('otherAdd')}/>
              <button className={classes.recipe__button} onClick={otherList} type='reset'>
                <Item value="Plus"/>
              </button>
            </div>
            {other.length > 0 &&
              (other.map(el=>(
              <div key={el} className={classes.recipe__container}>
                <input className={classes.recipe__inputAdded} value={el} disabled {...register('otherAdd' + el)}/>
                <button className={classes.recipe__button} type='reset' onClick={() => otherDelete(el)}>
                  <Item value="Delete"/>
                </button>
              </div>
              )))
            }
          </div>
        </div>
        <button type='submit' className={classes.recipe__submitButton}>Submit</button>
      </form>
    </div>
  )
}

export default Recipe