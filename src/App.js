import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react'

//import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard/index';
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import Vehicles from './Pages/Vehicle'
import { VehicleCreate } from './Pages/Vehicle/VehicleCreate';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
  <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
        <Sidebar/>
            <main className="content">
                <Topbar/>
                  <Routes>
                      <Route path="/" element={<Dashboard/>} />
                      <Route path='/vehicles' element={<Vehicles/>}/>
                      <Route path='/vehicles/create' element={<VehicleCreate/>} />
                  </Routes>

            </main>
        </div>
      </ThemeProvider>   
  </ColorModeContext.Provider>
  );
}

export default App;
