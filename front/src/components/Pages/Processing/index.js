import classes from './processing.module.scss'
import {calcList, cleanCard, singleRecipe}from '../../../store/reducers/RecipesListReducer/RecipesListReducer'

import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'

const Processing = () => {

  // variables
  const dispatch = useDispatch()
  const list = useSelector(state=>state.recipeslist.recipeslist)
  const recipe = useSelector(state => state.recipeslist.singlerecipe)
  const [options,setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [forCalc, setForCalc] = useState(null)
  const {
    register,
    handleSubmit
  } = useForm()

  // hooks
  useEffect(()=>{
      const array = []
      list.map(el=>{
        array.push({
          value: el.id, 
          label: el.name 
        })
      })
      setOptions(array)
  },[list])

  useEffect(()=>{
    if(recipe){
      list.map(item=>{
        if(item.id === recipe.id){
          setForCalc(item)
        }
      })
    }
  },[recipe,list])

  // functions

  const handleSelectClick = () => {
    dispatch(singleRecipe({credential: {
      id:selectedOption.value,
      name:selectedOption.label
    }}))
  }

  const onSubmit = (data) =>{
    const mainArr = forCalc.main.map(ingredient => ({
      name: ingredient,
      quantity: data[`${ingredient}quantity`] || data[`${ingredient}main quantity`] || "",
      price: data[`${ingredient}price`] || data[`${ingredient}main price`] || ""
    }));

    const otherArr = forCalc.other.map(ingredient => ({
      name: ingredient,
      quantity: data[`${ingredient}quantity`] || data[`${ingredient}other quantity`] || "",
      price: data[`${ingredient}price`] || data[`${ingredient}other price`] || ""
    }));

    dispatch(calcList({credential:
      {
      id: forCalc.id, 
      name: forCalc.name,
      main: mainArr,
      other: otherArr
    }
    }))
    dispatch(cleanCard())
  }

  return (
    <div className={classes.processing}>
      <h1 className={classes.processing__title}>Set up your new drink</h1>
      <div className={classes.processing__container}>
        <h2 className={classes.processing__secondTitle}>Chose your recipe</h2>
        {options.length > 0 && 
        <div className={classes.processing__search}>
          <Select classNamePrefix="react-select-processing" options={options} placeholder="Search your recipe..." onChange={setSelectedOption} // встановлюємо вибране
              value={selectedOption} />
          <button className={classes.processing__button} type='button' onClick={handleSelectClick}>Select</button>
        </div>
        }
        <h2 className={classes.processing__secondTitle}>Place your quantity and price</h2>
        {forCalc !== null && 
          <form className={classes.processing__container} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={classes.processing__secondTitle}>{forCalc.name}</h2>
            <div className={classes.processing__box}>
              <div className={classes.processing__options}>
                {forCalc.main.map(item=>(
                  <div key={item.id} className={classes.processing__item}>
                    <h3 className={classes.processing__thirdTitle}>{item}:</h3>
                    <input className={classes.processing__input} type='number' min={0} required placeholder='Put a quantity...' {...register(item + 'main quantity')}/>
                    <input className={classes.processing__input} type='number' min={0} required placeholder='Put a price...' {...register(item + 'main price')}/>
                  </div>
                ))}
              </div>
              <div className={classes.processing__options}>
                {forCalc.other.map(item=>(
                  <div key={item.id} className={classes.processing__item}>
                    <h3 className={classes.processing__thirdTitle}>{item}:</h3>
                    <input className={classes.processing__input} type='number' min={0} required placeholder='Put a quantity...' {...register(item + 'other quantity')}/>
                    <input className={classes.processing__input} type='number' min={0} required placeholder='Put a price...' {...register(item + 'other price')}/>
                  </div>
                ))}
              </div>
            </div>
            <button className={classes.processing__button} type='submit'>Done</button>
          </form>
        }
      </div>
    </div>
  )
}

export default Processing