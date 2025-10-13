import data from './data'

const Item = ({value, onClick}) => {

  return (
    <div onClick={onClick}>
      {data[value]}
    </div>
  )
}

export default Item