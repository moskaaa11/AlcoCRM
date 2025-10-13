import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import classes from './navbar.module.scss';
import Item from '../../UI/icons';

const NavBar = () => {

  const mainList = useSelector(state=>state.navbar.main)
  
  return (
    <div className={classes.Navbar}>
        <ul className={classes.list}>
            {mainList.map((item) => (
                <li key={item.id}>
                    <NavLink to={item.url} className={({ isActive })=>isActive 
                        ? classes.list__Activeitem 
                        : classes.list__item}
                    >
                        <Item value={item.cover.conversions.icon} />
                        <span className={classes.list__item__text}>{item.title}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavBar