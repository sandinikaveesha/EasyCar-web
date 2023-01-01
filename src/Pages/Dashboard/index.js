import Topbar from '../../Components/Topbar'
import Sidebar from '../../Components/Sidebar'
import Header from '../../Components/Header'
import { Box } from '@mui/material'


const Dashboard = ()=>{
    return (
       <>
        <Sidebar/>
        <main className='content'>
        <Topbar/>
        <Box m='20px'>
            <Header title='Dashboard' subtitle='Welcome to your dashboard'/>
        </Box>
        </main> 
       </>
    )
}

export default Dashboard;