import Topbar from '../../Components/Topbar'
import Sidebar from '../../Components/Sidebar'
import Header from '../../Components/Header'
import { Box } from '@mui/material'


const Dashboard = ()=>{
    return (
        <Box m='20px'>
            {/*Header*/}
            <Header title='Dashboard' subtitle='Welcome to your dashboard'/>
        </Box>
    )
}

export default Dashboard;