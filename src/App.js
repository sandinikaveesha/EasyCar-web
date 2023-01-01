import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Dashboard from './Pages/Dashboard/index';
import BusinessRegistration from './Pages/Business/BusinessRegistration';
import UserRegistration from './Pages/User/UserRegistration';
import AddVehicle from './Pages/Vehicle/AddVehicle';


function App() {
  const [theme, colorMode] = useMode();


  return (
  <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app"> 
                  <Routes>
                      <Route path="/" element={<Dashboard/>} />
                      <Route path="/register" element={<BusinessRegistration/>}/>
                      <Route path='/user/register' element={<UserRegistration/>}/>
                      <Route path='/vehicles' element={<AddVehicle/>}/>
                  </Routes>
        </div>
      </ThemeProvider>   
  </ColorModeContext.Provider>
  );
}

export default App;
