import classes from './icons.module.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const icons = {
    Home: <HomeOutlinedIcon className={classes.icon}/>,
    Budget: <RequestQuoteOutlinedIcon className={classes.icon}/>,
    Finance: <MonetizationOnOutlinedIcon className={classes.icon}/>,
    Recipe: <ReceiptLongOutlinedIcon className={classes.icon}/>,
    Settings: <SettingsOutlinedIcon className={classes.icon}/>,
    Statistic: <AnalyticsOutlinedIcon className={classes.icon}/>,
    Processing: <BlenderOutlinedIcon className={classes.icon}/>,
    Storage: <WarehouseOutlinedIcon className={classes.icon}/>,
    Exit: <ExitToAppOutlinedIcon className={classes.icon}/>,
    Plus: <LocalHospitalOutlinedIcon className={classes.icon} style={{color: 'green'}}/>,
    Delete: <DeleteForeverOutlinedIcon className={classes.icon} style={{color: 'red'}}/>
}
export default icons;