import classes from './processing.module.scss'
import RecipesListSlice from '../../../store/reducers/RecipesListReducer/RecipesListReducer'

import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { useEffect, useState } from 'react'

const Processing = () => {

  // variables
  const dispatch = useDispatch()
  const list = useSelector(state=>state.recipeslist.recipeslist)
  const [options,setOptions] = useState([])
  console.log(dispatch)
  console.log(list)

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

  return (
    <div className={classes.processing}>
      <h1 className={classes.processing__title}>Set up your new drink</h1>
      <div className={classes.processing__container}>
        <h2 className={classes.processing__secondTitle}>Chose your recipe</h2>
        {options.length > 0 && 
        <div className={classes.processing__search}>
          <Select classNamePrefix="react-select-processing" options={options} placeholder="Search your recipe..." />
          <button className={classes.processing__button} type='button'>Select</button>
        </div>
        }
      </div>
    </div>
  )
}

export default Processing